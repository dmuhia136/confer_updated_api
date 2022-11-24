import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomController } from 'src/controllers/room.controller';
import { Room, RoomSchema } from 'src/schema/room.schema';
import { RoomService } from 'src/services/room.service';

@Module({
  controllers: [RoomController],
  providers: [RoomService],
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
})
export class RoomModule {}
