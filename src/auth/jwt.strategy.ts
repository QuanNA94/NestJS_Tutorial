/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { PostgresService } from 'src/module/postgres.module';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private postgresService: PostgresService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,

    });
  }

  async validate(payload: any) {

    const userData = await this.postgresService.user.findOne({
      where: {
        email: payload?.data?.email || ""
      }
    })

    if (!userData) throw new ForbiddenException()

    return userData;
  }
}