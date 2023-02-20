import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetEmployee } from './decorators/get-employee.decorator';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/user.entity';
import { EmployeeJwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
  ) {
    console.log(employee);
  }
}
