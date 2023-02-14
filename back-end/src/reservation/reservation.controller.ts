import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationEntity } from './entities/reservation.entity';
import { CreateReservationDTO } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  async findAll(): Promise<ReservationEntity[]> {
    return await this.reservationService.findAll();
  }

  @Post()
  async create(@Body() reservation: CreateReservationDTO): Promise<{}> {
   
    // const reservationEntity = plainToClass(ReservationEntity, reservation); we can use this if the reservartion doesn't match the entity
    
    return await this.reservationService.create(reservation);
  }

  @Get('phonenum/:phoneNumber')
  async findByPhoneNumber(@Param('phoneNumber') phoneNumber: string): Promise<ReservationEntity[]> {
    return await this.reservationService.findByPhoneNumber(phoneNumber);
  }

  @Get('pharmacy/:pharmacyId')
  async findByPharmacyId(@Param('pharmacyId') pharmacyId: string): Promise<ReservationEntity[]> {
    return await this.reservationService.findByPharmacyId(pharmacyId);
  }

  @Get('medicine/:medicineId')
  async findByMedicineId(@Param('medicineId') medicineId: string): Promise<ReservationEntity[]> {
    return await this.reservationService.findByMedicineId(medicineId);
  }
}
