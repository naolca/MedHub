import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import { EmployeesController } from './employees.controller';
import { PharmaciesModule } from 'src/pharmacies/pharmacies.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt-employee' }),
    JwtModule.register({
      secret: 'MedHub',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([ Employee ]),
    PharmaciesModule,
  ],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
  ],
  exports: [
    PassportModule,
  ],
})
export class EmployeesModule {}