import { Injectable } from '@nestjs/common';
import { AuthDto, UserDto } from 'src/Dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../service_account.json';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(user: UserDto): Promise<any> {
    try {
      const createdUser = new this.userModel(user);
      return await createdUser.save();
    } catch (error) { 
      return error.message;
    }
  }
 

  async authenticate(user: AuthDto) {
    admin.initializeApp({
      credential: admin.credential.cert(`${serviceAccount}`),
    });
    admin.firestore().settings({ ignoreUndefinedProperties: true });

    try {
      var result = await this.userModel.find({ email: user.email }).exec();

      if (result.length == 0) {
        return { status: false, message: 'You don`t have an account' };
      } else {
        const customToken = await admin
          .auth()
          .createCustomToken(result[0]._id.toString());
        // token: generateToken(result[0]),
        return { status: true, firebaseToken: customToken, body: result[0] };
      }
    } catch (error) {}
  }

  async getAllUsers():Promise<any>{
    return await this.userModel.find().exec();
  }
}
