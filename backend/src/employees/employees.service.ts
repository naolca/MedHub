import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeCredentialsDto } from './dto/employee-credentials.dto';
import { Employee } from './entities/employee.entity';
import { EmployeeJwtPayload } from './jwt/jwt-payload.interface';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
    private jwtService: JwtService,
    private pharmaciesService: PharmaciesService,
  ) { }

  async getAllEmployees(): Promise<Employee[]> {
    return await this.employeesRepository.find();
  }

  async signUp(
    createEmployeeDto: CreateEmployeeDto
    ): Promise<void> {
    const employee: Employee = new Employee();

    employee.name = createEmployeeDto.name;
    // employee. = createEmployeeDto.employeeType;
    // employee.pharmacy = await this.pharmaciesService.findOne(createEmployeeDto.pharmacyId);

    employee.salt = await bcrypt.genSalt();
    employee.username = createEmployeeDto.username;
    employee.password = await this.hashPassword(createEmployeeDto.password, employee.salt);

    try {
      await this.employeesRepository.save(employee);
    } catch (error) {
      if (error.code == "23505") {
        throw new ConflictException(`User with the username ${employee.username} already exists. Pick another username.`);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(
    employeeCredentialsDto: EmployeeCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password, pharmacyId } = employeeCredentialsDto;
    const employee = await this.employeesRepository.findOne({ where: { username } });

    if (employee && (await bcrypt.compare(password, employee.password))) {
      const payload: EmployeeJwtPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  async hashPassword(password: string, salt: string) {
    return await bcrypt.hash( password, salt );
  }
}
