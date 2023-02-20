import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { DatabaseModule } from './database/database.module';
import { MedicinesModule } from './medicines/medicines.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ 
    MedicinesModule, 
    DatabaseModule, 
    PharmaciesModule, 
    ReservationsModule, 
    PassportModule,
    AuthModule
  ],
})
export class AppModule {}
