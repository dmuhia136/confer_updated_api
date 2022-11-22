import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmpty, IsNotEmpty, IsNumber } from 'class-validator';
import { isEmpty } from 'rxjs';

export class AuthDto {
  @IsString()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'User email',
    example: 'johndoe@gmail.com',
  })
  email: string;
}

export class UserDto {
  @IsString()
  @ApiProperty({
    description: 'Users first name',
    example: 'John ',
  })
  firstName: string;
  @ApiProperty({
    description: 'Users Last name',
    example: ' Doe',
  })
  @IsString()
  lastName: string;
  @IsString()
  @ApiProperty({
    description: 'Users username',
    example: 'JohnLee',
  })
  userName: string;
  @IsString()
  @ApiProperty({
    description: 'Users location',
    example: 'Minnesota',
  })
  location: string;
  @ApiProperty({
    description: 'Users age range',
    example: 20,
  })
  @IsNumber()
  ageRange: number;
  @ApiProperty({
    description: 'Users age',
    example: 25,
  })
  @IsNumber()
  age: number;
  @IsString()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'Users email',
    example: 'JohnDoe@gmail.com',
  })
  email: string;
  // @IsString()
  // followers: string;
  // @IsString()
  // following: string;
  @IsString()
  @ApiProperty({
    description: 'Mongo ID ',
    example: '214128371209129030',
  })
  currentRoom: string;
  @IsString()
  @ApiProperty({
    description: 'Image address ',
    example:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
  })
  profilePicture: string;
  @IsString()
  @ApiProperty({
    description: 'Google Auth key ',
    example: '214128371209129030',
  })
  googleKey: string;
  @IsString()
  @ApiProperty({
    description: 'Facebook Auth Key',
    example: '214128371209129030',
  })
  facebookKey: string;
  @IsString()
  @ApiProperty({
    description: 'Apple Auth Key',
    example: '214128371209129030',
  })
  appleKey: string;
  @IsString()
  @ApiProperty({
    description: 'JWT token ',
    example: '214128371209129030',
  })
  teaserToken: string;
  @ApiProperty({
    description: 'Users bio ',
    example:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
  })
  @IsString()
  bio: string;
}
