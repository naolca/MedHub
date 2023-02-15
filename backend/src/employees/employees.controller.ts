import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeCredentialsDto } from './dto/employee-credentials.dto';
import { Employee } from './entities/employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.signUp(createEmployeeDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) employeeCredentialsDto: EmployeeCredentialsDto): Promise<{ accessToken: string }> {
    return this.employeesService.logIn(employeeCredentialsDto);
  }
}
