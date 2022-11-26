import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategy/local.stategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/services/constants/auth-secret';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
