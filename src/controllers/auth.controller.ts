import { Get, Post, Controller, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthDto, UserDto } from 'src/Dto';
import { AuthService } from '../services/auth.service';

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
  async authenticate(@Body() auth: AuthDto) {
    return await this.authService.authenticate(auth);
  } 


  //login user
  @Post('/signin')
  loginUser(): any {
    return { name: 'Dennis', email: 'dmuhia@gmail.com' };
  }

  @Get('/')
  async getAllUsers():Promise<any> {
    return await this.authService.getAllUsers();
  }

  @Get('/one')
  getOneUser(){
    return "user";
  }
}
