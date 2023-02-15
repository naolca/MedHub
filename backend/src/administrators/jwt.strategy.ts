import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';
import { Repository } from 'typeorm';
import { JwtAdministratorPayload } from './jwt-administrator-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Administrator)
    private administratorRepository: Repository<Administrator>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'MedHub',
    });
  }

  async validate(payload: JwtAdministratorPayload): Promise<Administrator> {
    const { username } = payload;
    const administrator = await this.administratorRepository.findOne({ where: { username } });

    console.log(administrator);

    if (!administrator) {
      throw new UnauthorizedException();
    }

    return administrator;
  }
}