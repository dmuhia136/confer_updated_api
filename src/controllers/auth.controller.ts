import { Get, Post, Controller, Body, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthDto, UserDto } from 'src/Dto';
import { AuthService } from '../services/auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //create user
  @Post('/signup')
  @ApiCreatedResponse({
    description: 'User created',
  })
  @ApiBadRequestResponse({
    description: 'User could not be created',
  })
  async createUser(@Body() user: UserDto): Promise<any> {
    return await this.authService.createUser(user);
  }

  //authenticate user with google and create account
  @Post('/authenticate')
  @ApiCreatedResponse({
    description: 'Create user on the firebase',
  })
  @ApiBadRequestResponse({
    description:
      'User was not found or there was an error that occurred creating the user',
  })
  async authenticate(@Body() auth: AuthDto, @Req() req: Request) {
    return await this.authService.authenticate(auth, req);
  }

  //login user
  @Post('/signin')
  @ApiCreatedResponse({
    description: 'Signin users',
  })
  @ApiBadRequestResponse({
    description:
      'User was not found or there was an error that occurred fetching the user',
  })
  async loginUser(@Body() auth: AuthDto): Promise<any> {
    return await this.authService.signInUser(auth);
  }
}
