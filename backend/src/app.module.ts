import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { DatabaseModule } from './database/database.module';
import { MedicinesModule } from './medicines/medicines.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [ MedicinesModule, DatabaseModule, PharmaciesModule, ReservationsModule, AdministratorsModule, EmployeesModule ],
})
export class AppModule {}
