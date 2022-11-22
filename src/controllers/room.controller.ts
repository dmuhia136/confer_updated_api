import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RoomService } from "src/services/room.service";

@ApiTags('Auth')
@Controller('room')
export class RoomController{
constructor(private roomService: RoomService){}
}