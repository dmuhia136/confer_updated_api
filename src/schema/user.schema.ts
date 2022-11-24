import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop([String])
  firstName: string;

  @Prop([String])
  lastName: string;

  @Prop([String])
  userName: string;

  @Prop([String])
  location: string;

  @Prop([Number])
  ageRange: number;

  @Prop()
  age: number;

  @Prop([String])
  email: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  followers: [];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  following: [];

  @Prop([String])
  currentRoom: string;

  @Prop([String])
  profilePicture: string;

  @Prop([String])
  googleKey: string;

  @Prop([String])
  facebookKey: string;

  @Prop([String])
  appleKey: string;

  @Prop([String])
  teaserToken: string;

  @Prop([String])
  bio: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
