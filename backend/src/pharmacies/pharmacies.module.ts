import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { Pharmacy } from './entities/pharmacy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { MedicinesService } from 'src/medicines/medicines.service';
import { Medicine } from 'src/medicines/entities/medicine.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ Pharmacy, Medicine ]),
    PassportModule,
  ],
  controllers: [ PharmaciesController ],
  providers: [ PharmaciesService],
  exports: [ PharmaciesService ]
})
export class PharmaciesModule {}
