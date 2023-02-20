import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { GetEmployee } from './decorators/get-employee.decorator';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';
import { EmployeeJwtAuthGuard } from './jwt/employee-jwt-auth.guard';
import { AdministratorJwtAuthGuard } from 'src/administrators/jwt/administrator-jwt-auth.guard';

@Controller('employees')
export class EmployeesController {
  constructor(private authService: EmployeesService) {}

  @Post('/signup')
  signUp(@Body() createEmployeeDto: CreateEmployeeDto): Promise<void> {
    return this.authService.signUp(createEmployeeDto);
  }

  @Post('/signin')
  signIn(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(createEmployeeDto);
  }

  @Get('test')
  @UseGuards(EmployeeJwtAuthGuard)
  test(
    @GetEmployee() employee: Employee,
    @Req() req
  ) {
    console.log(employee, req.user);
  }
}
