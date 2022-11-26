import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type TransDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop()
  amount: number;
  @Prop()
  creditCard: string;
  @Prop()
  bankAccount: string;
  @Prop()
  bankName: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }) 
  owner: User;
}

export const TransSchema = SchemaFactory.createForClass(Transaction);
