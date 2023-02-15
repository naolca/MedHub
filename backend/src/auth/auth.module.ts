import { Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { User } from './entities/user.entity';
import { Administrator } from './entities/administrator.entity';
import { Employee } from './entities/employee.entity';
import { PharmaciesModule } from 'src/pharmacies/pharmacies.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'MedHub',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([ User, Administrator, Employee ]),
    PharmaciesModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
  ],
  exports: [
    JwtStrategy,
    PassportModule,
  ],
})
export class AuthModule {}