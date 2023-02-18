import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { MedicinesModule } from 'src/medicines/medicines.module';
import { PharmaciesModule } from 'src/pharmacies/pharmacies.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Reservation ]),
    MedicinesModule,
    PharmaciesModule,
    PassportModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService]
})
export class ReservationsModule {}
