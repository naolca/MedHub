import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { DatabaseModule } from './database/database.module';
import { MedicinesModule } from './medicines/medicines.module';
import { PassportModule } from '@nestjs/passport';
import { EmployeesModule } from './employees/employees.module';
import { AdministratorsModule } from './administrators/administrators.module';

@Module({
  imports: [ 
    MedicinesModule, 
    DatabaseModule, 
    PharmaciesModule, 
    ReservationsModule, 
    PassportModule,
    EmployeesModule,
    AdministratorsModule
  ],
})
export class AppModule {}
