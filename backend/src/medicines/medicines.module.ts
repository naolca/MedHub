import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';
import { MedicinesController } from './medicines.controller';
import { MedicinesService } from './medicines.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medicine]),
    PassportModule
  ],
  controllers: [ MedicinesController ],
  providers: [ MedicinesService ],
  exports: [ MedicinesService ]
})
export class MedicinesModule {}
