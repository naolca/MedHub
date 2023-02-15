import { Module } from '@nestjs/common';
import { MedicinesModule } from './medicines/medicines.module';
import { PrivilagesModule } from './privilages/privilages.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { EmployeesModule } from './employees/employees.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MedicinesModule } from './medicines/medicines.module';

@Module({
  imports: [MedicinesModule, DatabaseModule, AuthModule, EmployeesModule, PharmaciesModule, ReservationsModule, AdministratorsModule, PrivilagesModule],
})
export class AppModule {}
