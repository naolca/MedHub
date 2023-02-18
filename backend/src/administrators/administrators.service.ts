import { JwtService } from '@nestjs/jwt';

import * as bcrypt from "bcrypt";

import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AdministratorCredentialsDto } from './dto/admin-credentials.dto';
import { Administrator } from './entities/administrator.entity';
import { JwtAdministratorPayload } from './jwt-administrator-payload.interface';

@Injectable()
export class AdministratorsService {
  constructor (
      @InjectRepository(Administrator)
      private administratorRepository: Repository<Administrator>,
      private jwtService: JwtService,
  ) {}

  async signUp(administratorCredentialsDto: AdministratorCredentialsDto): Promise<void> {
      const administrator: Administrator = new Administrator();

      administrator.salt = await bcrypt.genSalt();
      administrator.username = administratorCredentialsDto.username;
      administrator.password = await this.hashPassword(administratorCredentialsDto.password, administrator.salt);

      try {
          await this.administratorRepository.save(administrator);
      } catch (error) {
          if (error.code == "23505") {
              throw new ConflictException(`Administrator with the username ${administrator.username} already exists. Pick another username.`);
          } else {
              throw new InternalServerErrorException();
          }
      }
  }

  async logIn(administratorCredentialsDto: AdministratorCredentialsDto): Promise<{ accesToken: string }> {
      const username: string = await this.validateUserCredentials(administratorCredentialsDto);

      if (!username) {
          throw new UnauthorizedException(`Something is wrong.`);
      }

      const payload: JwtAdministratorPayload = { username };
      const accesToken: string = await this.jwtService.sign(payload);

      return { accesToken };
  }

  async validateUserCredentials(administratorCredentialsDto: AdministratorCredentialsDto): Promise<string> {
      let { username, password } = administratorCredentialsDto;

      const administrator: Administrator = await this.administratorRepository.findOne({ where: { username } });

      if (administrator && await administrator.checkPassword(password)) {
          return username;
      } else {
          return null;
      }
  }

  async hashPassword(password: string, salt: string): Promise<string> {
      return await bcrypt.hash(password, salt);
  }
}
