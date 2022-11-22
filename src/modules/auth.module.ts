import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  User, UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [AuthService],
  controllers:[AuthController]
})
export class AuthModule {}
 