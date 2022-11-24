import { Injectable, Param, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/Dto';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async fetchAllUsers(): Promise<UserDto[]> {
    const result = await this.userModel.find().exec();
    return result;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    return user;
  }
}
