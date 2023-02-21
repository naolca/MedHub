import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmaciesModule } from 'src/pharmacies/pharmacies.module';
import { Medicine } from './entities/medicine.entity';
import { PharmacyMedicine } from './entities/pharmacy-medicine.entity';
import { MedicinesController } from './medicines.controller';
import { MedicinesService } from './medicines.service';
import { PharmacyMedicineRepository } from './pharmacy-medicine.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medicine,PharmacyMedicine]),
    PassportModule,PharmaciesModule
  ],
  controllers: [ MedicinesController ],
  providers: [ MedicinesService,PharmacyMedicineRepository],
  exports: [ MedicinesService ]
})
export class MedicinesModule {}
