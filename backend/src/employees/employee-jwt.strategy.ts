// jwt-employee.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { EmployeesService } from './employees.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { JwtEmployeePayload } from './jwt-employee-payload.interface';

@Injectable()
export class EmployeeJwtStrategy extends PassportStrategy(Strategy, 'jwt-employee') {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "MedHub",
    });
    console.log(this.jwtFromRequest);
  }

  async validate(payload: JwtEmployeePayload): Promise<any> {
    console.log(payload);
    const employee = await this.employeeRepository.findOne({ where: { username: payload.username }});
    console.log(employee);
    if (!employee) {
      throw new UnauthorizedException('Invalid token');
    }
    return employee;
  }
}
