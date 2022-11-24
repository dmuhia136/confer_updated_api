import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { AuthDto } from 'src/Dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(auth: AuthDto): Promise<any> {
    console.log(auth);
    const user = await this.authService.signInUser(auth);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
