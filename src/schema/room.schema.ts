import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  ownerId: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  participants: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  raisedHands: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  invitedIds: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  hostIds: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  speakerIds: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  invitedHostIds: string;
  @Prop([Boolean])
  allowChat: boolean;
  @Prop([Boolean])
  useConferId: boolean;
  @Prop([String])
  conferId: string;
  @Prop([Boolean])
  hideParticipants: boolean;
  @Prop([String])
  meetingFrom: string;
  @Prop([Boolean])
  encryption: boolean;
  @Prop([Number])
  teaserFee: number;
  @Prop([Number])
  sessionRate: number;
  @Prop([Number])
  cancelFee: number;
  @Prop([String])
  passCode: string;
  @Prop([Boolean])
  noShowFee: boolean;
  @Prop([Boolean])
  noShowPenalty: boolean;
  @Prop([String])
  meetingId: string;
  @Prop([String])
  meetingTo: string;
  @Prop([Boolean])
  autoPayout: boolean;
  @Prop([Boolean])
  participantSpeak: boolean;
  @Prop([Boolean])
  requireMeetingPassCode: boolean;
  @Prop([String])
  timeZone: string;
  @Prop([String])
  meetingType: string;
  @Prop([String])
  subscriptionType: string;
  @Prop([String])
  raiseHands: string;
  @Prop([Number])
  rating: number;
  @Prop([String])
  ratingMessage: string;
  @Prop([Boolean])
  teaser: boolean;
  @Prop([Number])
  teaserDuration: number;
  @Prop([String])
  noShowGracePeriod: string;
  @Prop([Number])
  noShowFeeAmount: number;
  @Prop([Boolean])
  cancellationPenalty: boolean;
  @Prop([Boolean])
  ended: boolean;
  @Prop([Number])
  endedTime: number;
}
export const RoomSchema = SchemaFactory.createForClass(Room);
