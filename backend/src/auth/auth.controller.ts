import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { EmployeeCredentialsDto } from './dto/employee-credentials.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  // @Post('/admin/signup')
  // adminSignUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
  //   return this.authService.signUp(authCredentialsDto);
  // }

  // @Post('/admin/signin')
  // adminSignIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
  //   return this.authService.logIn(authCredentialsDto);
  // }

  @Post('/signup')
  signUp(@Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto): Promise<void> {
    return this.authService.signUp(createEmployeeDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) employeeCredentialsDto: EmployeeCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.logIn(employeeCredentialsDto);
  }
}