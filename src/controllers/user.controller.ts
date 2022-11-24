import { Get, Post, Controller, Body, Param } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from 'src/Dto';
import { UserService } from 'src/services/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  @ApiCreatedResponse({
    description: 'Get all users in the database',
  })
  @ApiBadRequestResponse({
    description:
      'No users were found or there was a problem with your connection',
  })
  async getAllUsers(): Promise<UserDto[]> {
    return await this.userService.fetchAllUsers();
  }

  @Get('/:id')
  @ApiCreatedResponse({
    description: 'Get all users in the database',
  })
  @ApiBadRequestResponse({
    description:
      'No users were found or there was a problem with your connection',
  })
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.userService.findOne(id);
  }
}
