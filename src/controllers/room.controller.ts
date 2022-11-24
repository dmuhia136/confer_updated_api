import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RoomDto } from 'src/Dto';
import { RoomService } from 'src/services/room.service';

@ApiTags('Rooms')
@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: 'Create room was successful',
  })
  @ApiBadRequestResponse({
    description:
      'Room was not created there maybe error on your connection or data',
  })
  async createRoom(@Body() room: RoomDto): Promise<any> {
    return await this.roomService.createRoom(room);
  }

  @Get('/')
  @ApiCreatedResponse({
    description: 'Fetch rooms was successful',
  })
  @ApiBadRequestResponse({
    description:
      'Rooms were not fetched, there maybe error on your connection or data',
  })
  async fetchAllRooms(): Promise<any> {
    return await this.roomService.fetchAllRooms();
  }

  @Put('updateroom/:id')
  @ApiCreatedResponse({
    description: 'Room was successfully updated',
  })
  @ApiBadRequestResponse({
    description: 'There was an error in update the room details',
  })
  async updateUser(
    @Body() room: RoomDto,
    @Param('id') id: string,
  ): Promise<any> {
    return await this.roomService.updateRooms(room, id);
  }

  @Get('/:id')
  @ApiCreatedResponse({
    description: 'Get room by id',
  })
  @ApiBadRequestResponse({
    description:
      'Room does not exist or there was an error with your connection',
  })
  async fetchOneRoom(@Param('id') id: string): Promise<any> {
    return await this.roomService.fetchOneRoom(id);
  }

  
  @Get('agoratoken/:channel')
  @ApiCreatedResponse({
    description: 'Create a room agora token ',
  })
  @ApiBadRequestResponse({
    description: 'Agora access token was not created check your connection',
  })
  async createAgoraToken(@Param('channel') channel:string): Promise<any> {
    return await this.roomService.createRoomToken(channel);
  }
}
