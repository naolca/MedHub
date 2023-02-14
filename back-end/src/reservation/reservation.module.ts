import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
// import { ReservationRepository } from './reservation.respository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from './entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])], // either the repository or entity should be imported
  controllers: [ReservationController],
  providers: [ReservationService],

  
})
export class ReservationModule {}
