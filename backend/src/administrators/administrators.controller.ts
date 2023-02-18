import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AdministratorsService } from './administrators.service';
import { AdministratorCredentialsDto } from './dto/admin-credentials.dto';
import { Administrator } from './entities/administrator.entity';

import { GetAdministrator } from './get-administrator.decorator';
import { JwtStrategy } from './jwt.strategy';

@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Post("signup")
  signUp(@Body(ValidationPipe) administratorCredentialsDto: AdministratorCredentialsDto): Promise<void> {
    return this.administratorsService.signUp(administratorCredentialsDto);
  }

  @Post("login")
  async logIn(@Body() administratorCredentialsDto: AdministratorCredentialsDto): Promise<{ accesToken: string }> {
    return await this.administratorsService.logIn(administratorCredentialsDto);
  }

  @Post("test")
  // @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req.user);
  }
}
