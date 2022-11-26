import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
 
  IsNotEmpty,
  IsNumber,
  IsBoolean,
} from 'class-validator';

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

export class RoomDto {
  @IsString()
  @ApiProperty({
    description: 'Owner id',
    example: '636a5996d7483b54420d139e',
  })
  ownerId: string;
  @IsString()
  @ApiProperty({
    description: 'Participant id',
    example: '636a5996d7483b54420d139e',
  })
  participants: string;
  @IsString()
  @ApiProperty({
    description: 'raised hands id',
    example: '636a5996d7483b54420d139e',
  })
  raisedHands: string;
  @IsString()
  @ApiProperty({
    description: 'Invited id',
    example: '636a5996d7483b54420d139e',
  })
  invitedIds: string;
  @IsString()
  @ApiProperty({
    description: 'Host id',
    example: '636a5996d7483b54420d139e',
  })
  hostIds: string;
  @IsString()
  @ApiProperty({
    description: 'Speaker id',
    example: '636a5996d7483b54420d139e',
  })
  speakerIds: string;
  @IsString()
  @ApiProperty({
    description: 'Invited hosts id',
    example: '636a5996d7483b54420d139e',
  })
  invitedHostIds: string;
  @IsBoolean()
  @ApiProperty({
    description: 'Allow chat id',
    example: false,
  })
  allowChat: boolean;
  @IsBoolean()
  @ApiProperty({
    description: 'user Confer id',
    example: true,
  })
  useConferId: boolean;
  @IsString()
  @ApiProperty({
    description: 'Confer id',
    example: '123435675654',
  })
  conferId: string;
  @IsBoolean()
  @ApiProperty({
    description: 'hideParticipants id',
    example: true,
  })
  hideParticipants: boolean;
  @IsString()
  @ApiProperty({
    description: 'meetingFrom',
    example: '4 pm',
  })
  meetingFrom: string;
  @IsBoolean()
  @ApiProperty({
    description: 'encryption',
    example: false,
  })
  encryption: boolean;
  @IsNumber()
  @ApiProperty({
    description: 'Teaser fee',
    example: 30,
  })
  teaserFee: number;
  @IsBoolean()
  @ApiProperty({
    description: 'encryption',
    example: false,
  })
  sessionRate: number;
  @IsNumber()
  @ApiProperty({
    description: 'cancelFee',
    example: 30,
  })
  cancelFee: number;
  @IsString()
  @ApiProperty({
    description: 'Passcode',
    example: '1234',
  })
  passCode: string;
  @IsBoolean()
  @ApiProperty({
    description: 'noShowFee',
    example: false,
  })
  noShowFee: boolean;
  @IsBoolean()
  @ApiProperty({
    description: 'noShowPenalty',
    example: false,
  })
  noShowPenalty: boolean;
  @IsString()
  @ApiProperty({
    description: 'meetingId',
    example: '1234651778929',
  })
  meetingId: string;
  @IsString()
  @ApiProperty({
    description: 'meetingTo',
    example: '7 pm',
  })
  meetingTo: string;
  @IsBoolean()
  @ApiProperty({
    description: 'Auto payout',
    example: false,
  })
  autoPayout: boolean;
  @IsBoolean()
  @ApiProperty({
    description: 'meetingTo',
    example: false,
  })
  participantSpeak: boolean;
  @IsBoolean()
  @ApiProperty({
    description: 'requireMeetingPassCode',
    example: true,
  })
  requireMeetingPassCode: boolean;
  @IsString()
  @ApiProperty({
    description: 'time Zone',
    example: 'Est',
  })
  timeZone: string;
  @IsString()
  @ApiProperty({
    description: 'Meeting type',
    example: 'Open',
  })
  meetingType: string;
  @IsString()
  @ApiProperty({
    description: 'Subscription type',
    example: 'Month',
  })
  subscriptionType: string;
  @IsString()
  @ApiProperty({
    description: 'Raised hands',
    example: '2134356',
  })
  raiseHands: string;
  @IsNumber()
  @ApiProperty({
    description: 'Rating',
    example: 2,
  })
  rating: number;
  @IsString()
  @ApiProperty({
    description: 'Rating message',
    example: 'The meeting was informative',
  })
  ratingMessage: string;
  @IsBoolean()
  @ApiProperty({
    description: 'Teaser',
    example: false,
  })
  teaser: boolean;
  @IsNumber()
  @ApiProperty({
    description: 'Teaser duration ',
    example: 5,
  })
  teaserDuration: number;
  @IsString()
  @ApiProperty({
    description: 'No show grace period',
    example: '12',
  })
  noShowGracePeriod: string;
  @IsNumber()
  @ApiProperty({
    description: 'No show fee amount',
    example: 123,
  })
  noShowFeeAmount: number;
  @IsBoolean()
  @ApiProperty({
    description: 'Cancellation fee',
    example: false,
  })
  cancellationPenalty: boolean;
  @IsBoolean()
  @ApiProperty({
    description: 'Room ended',
    example: true,
  })
  ended: boolean;
  @IsNumber()
  @ApiProperty({
    description: 'Ended time',
    example: 8,
  })
  endedTime: number;
}


export class TransactionDto{
  @IsNumber()
  @ApiProperty({
    description: 'Amount',
    example: 1200,
  })
  amount: number;
  @IsString()
  @ApiProperty({
    description: 'Credit card number',
    example: '12343431232',
  })
  creditCard: string;
  @IsString()
  @ApiProperty({
    description: 'Bank account number',
    example: '1221213213',
  })
  bankAccount: string;
  @IsString()
  @ApiProperty({
    description: 'Bank name',
    example: 'Backlays',
  })
  bankName: string;
  @IsString()
  @ApiProperty({
    description: 'Owner id',
    example: '636a5996d7483b54420d139e',
  })
  owner: string;
}

export class WithdrawDto{
  @IsNumber()
  @ApiProperty({
    description: 'Amount',
    example: 120,
  })
  amount: number;
  @IsString()
  @ApiProperty({
    description: 'Owner id',
    example: '636a5996d7483b54420d139e',
  })
  owner: string;
}

export class RoomRatingDto{
  @IsString()
  @ApiProperty({
    description: 'Room rating',
    example: "4",
  })
  rating:string;
  @IsString()
  @ApiProperty({
    description: 'Room rating message',
    example: "The meeting was informative",
  })
  ratingMessage:string;
}