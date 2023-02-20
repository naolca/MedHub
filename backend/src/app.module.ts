import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { DatabaseModule } from './database/database.module';
import { MedicinesModule } from './medicines/medicines.module';
import { PassportModule } from '@nestjs/passport';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [ 
    MedicinesModule, 
    DatabaseModule, 
    PharmaciesModule, 
    ReservationsModule, 
    PassportModule,
    EmployeesModule
  ],
})
export class AppModule {}
