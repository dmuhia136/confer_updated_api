import { Get, Post, Controller, Body } from '@nestjs/common';
import { UserDto } from 'src/Dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get('/all')
  async getAllUsers():Promise<UserDto[]> {
    return await this.userService.fetchAllUsers();
  }
}
