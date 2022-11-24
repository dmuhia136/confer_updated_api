import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDto } from 'src/Dto';
import { Room, RoomDocument, RoomSchema } from 'src/schema/room.schema';
import {
  RtcTokenBuilder,
  RtcRole,
  RtmTokenBuilder,
  RtmRole,

} from 'agora-access-token';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}
  
  async createRoom(room: RoomDto): Promise<any> {
    try {
      const response = new this.roomModel(room);
      return await response.save();
    } catch (error) {
      return error;
    }
  }

  async fetchAllRooms(): Promise<any> {
    const response = await this.roomModel.find().exec();
    return response;
  }

  //still to do
  async updateRooms(room: RoomDto, id: string): Promise<any> {
    try {
      await this.roomModel.findByIdAndUpdate(id, {
        $set: room,
      });
      return 'Room has been updated';
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async fetchOneRoom(id: string): Promise<any> {
    try {
      const response = await this.roomModel.findById(id);
      return response;
    } catch (error) {
      return new BadRequestException();
    }
  }

  async createRoomToken(channel: string): Promise<any> {
    try {
      const uid = 0;
      const role = RtcRole.PUBLISHER;

      const expirationTimeInSeconds = 84600;
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

      const token = RtmTokenBuilder.buildToken(
        process.env.AGORA_ID,
        process.env.AGORA_CERT,
        channel,
        RtmRole,
        privilegeExpiredTs,
      );
      return { status: true, agoraToken: token };
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}
