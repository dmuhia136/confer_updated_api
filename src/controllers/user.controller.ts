import { Get, Post, Controller, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/all')
  getAllUsers() {
    return 'all users';
  }
  
}
