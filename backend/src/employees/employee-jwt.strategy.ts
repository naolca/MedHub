// jwt-employee.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtEmployeePayload } from './jwt-employee-payload.interface';
import { EmployeesService } from './employees.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeJwtStrategy extends PassportStrategy(Strategy, 'jwt-employee') {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private employeesService: EmployeesService
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "MedHub",
    });
  }

  async validate(payload: JwtEmployeePayload): Promise<any> {
    const employee = await this.employeeRepository.findOne({ where: { username: payload.username }});
    if (!employee) {
      throw new UnauthorizedException('Invalid token');
    }
    return employee;
  }
}
