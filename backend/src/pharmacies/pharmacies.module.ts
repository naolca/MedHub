import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { Pharmacy } from './entities/pharmacy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([ Pharmacy ]),
  ],
  controllers: [ PharmaciesController ],
  providers: [ PharmaciesService ],
  exports: [ PharmaciesService, ]
})
export class PharmaciesModule {}
