import { Module } from '@nestjs/common';
import { PrivilagesModule } from './privilages/privilages.module';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MedicinesModule } from './medicines/medicines.module';

@Module({
  imports: [MedicinesModule, DatabaseModule, AuthModule, PharmaciesModule, ReservationsModule, PrivilagesModule],
})
export class AppModule {}
