import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AdministratorsService } from './administrators.service';
import { AdministratorCredentialsDto } from './dto/admin-credentials.dto';
import { Administrator } from './entities/administrator.entity';

import { GetAdministrator } from './get-administrator.decorator';

@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Post("signup")
  signUp(@Body(ValidationPipe) authCredentialsDto: AdministratorCredentialsDto): Promise<void> {
    return this.administratorsService.signUp(authCredentialsDto);
  }

  @Post("login")
  async logIn(@Body() authCredentialsDto: AdministratorCredentialsDto): Promise<{ accesToken: string }> {
    return await this.administratorsService.logIn(authCredentialsDto);
  }

  @Post("test")
  @UseGuards(AuthGuard())
  test(@GetAdministrator() administrator: Administrator) {
    console.log(administrator);
  }
}
