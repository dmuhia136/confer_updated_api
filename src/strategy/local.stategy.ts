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

  async validate(username:AuthDto): Promise<any> {
    const user = await this.authService.signInUser(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
