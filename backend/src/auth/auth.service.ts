import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const employee: Employee = new Employee();

    employee.name = createEmployeeDto.name;
    employee.employeeType = createEmployeeDto.employeeType;
    employee.pharmacy = await this.pharmaciesService.findOne(createEmployeeDto.pharmacyId);

    employee.salt = await bcrypt.genSalt();
    employee.username = createEmployeeDto.username;
    employee.password = await this.hashPassword(createEmployeeDto.password, employee.salt);

    try {
      await this.employeeRepository.save(employee);
    } catch (error) {
      if (error.code == "23505") {
        throw new ConflictException(`User with the username ${employee.username} already exists. Pick another username.`);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersRepository.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
