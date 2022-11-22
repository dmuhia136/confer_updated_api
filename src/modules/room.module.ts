import { Module } from "@nestjs/common";
import { RoomController } from "src/controllers/room.controller";
import { AuthService } from "src/services/auth.service";
import { RoomService } from "src/services/room.service";

@Module({
    controllers:[RoomController],
    providers:[RoomService],
    imports:[AuthService]
})
export class RoomModule{

}