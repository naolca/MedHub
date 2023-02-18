import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeCredentialsDto } from './dto/employee-credentials.dto';
import { Employee } from './entities/employee.entity';
import { EmployeeRolesGuard } from './employee-roles.guard';
import { EmployeeRoles } from './employee-roles.decorator';
import { EmployeeRoleTypes } from './roles/employee.roles';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @UseGuards( JwtAuthGuard, EmployeeRolesGuard )
  @EmployeeRoles( EmployeeRoleTypes.Owner )
  async getAllEmployees() {
    return this.employeesService.getAllEmployees();
  }

  @Post('/signup')
  signUp(@Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.signUp(createEmployeeDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) employeeCredentialsDto: EmployeeCredentialsDto): Promise<{ accessToken: string }> {
    return this.employeesService.logIn(employeeCredentialsDto);
  }
}
