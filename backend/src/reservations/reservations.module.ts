import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { MedicinesModule } from 'src/medicines/medicines.module';
import { PharmaciesModule } from 'src/pharmacies/pharmacies.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Reservation ]),
    MedicinesModule,
    PharmaciesModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, Reservation]
})
export class ReservationsModule {}
