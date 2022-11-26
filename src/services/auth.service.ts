import { Injectable } from '@nestjs/common';
import { AuthDto, UserDto } from 'src/Dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../middlewares/service_account.json';
import { User, UserDocument } from 'src/schema/user.schema';
import * as firebaseServices from '../../service_account.json';
import { Request } from 'express';
import { auth } from 'firebase-admin';
import { firebase_params } from 'src/middlewares/preauth.middleware';
import { JwtService } from '@nestjs/jwt';

admin.initializeApp({
  credential: admin.credential.cert(firebase_params),
});
admin.firestore().settings({ ignoreUndefinedProperties: true });

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,private jwtService: JwtService) {}

  async createUser(user: UserDto): Promise<any> {
    try {
      const createdUser = new this.userModel(user);
      const newUser=await createdUser.save();
      const customToken = await admin
      .auth()
      .createCustomToken(newUser._id.toString());
      return {status: true, firebaseToken: customToken,message: "User created", body: newUser}
    } catch (error) {
      return error.message;
    }
  }

  async authenticate(user: AuthDto, req: Request) {
    try {
      const result = await this.userModel.find({ email: user.email }).exec();
      if (result.length == 0) {
        return { status: false, message: 'You don`t have an account' };
      } else {
        const customToken = await admin
          .auth()
          .createCustomToken(result[0]._id.toString());
        // token: generateToken(result[0]),
        return { status: true, firebaseToken: customToken, body: result[0] };
      }
    } catch (error) {
      return error;
    }
  }

  async signInUser(auth: AuthDto): Promise<{}> {
    try {
      const user = await this.userModel.findOne({ email: auth.email });
      if (!user) {
        return { status: false, error: 'No user with that email found' };
      } else {
        const customToken = await admin
          .auth()
          .createCustomToken(user._id.toString());
        // firebaseToken: customToken, token: generateToken(user),
        return { status: true, firebaseToken: customToken, body: user };
      }
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}
