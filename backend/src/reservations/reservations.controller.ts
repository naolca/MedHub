import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  // @Get()
  // async findAll(): Promise<Reservation[]> {
  //   return await this.reservationsService.findAll();
  // }

  @Post()
  create(@Body() reservation: CreateReservationDto): Promise<any> {
   
    // const Reservation = plainToClass(Reservation, reservation); we can use this if the reservartion doesn't match the entity
    
    return  this.reservationsService.addReservation(reservation);
  }

  // @Get('phonenum/:phoneNumber')
  // async findByPhoneNumber(@Param('phoneNumber') phoneNumber: string): Promise<Reservation[]> {
  //   return await this.reservationsService.findByPhoneNumber(phoneNumber);
  // }

  @Get('pharmacy/:pharmacyId')
findByPharmacyId(@Param('pharmacyId') pharmacyId: number): Promise<Reservation[]> {
    return  this.reservationsService.findByPharmacyId(pharmacyId);
  }

  // @Get('medicine/:medicineId')
  // async findByMedicineId(@Param('medicineId') medicineId: string): Promise<Reservation[]> {
  //   return await this.reservationsService.findByMedicineId(medicineId);
  // }
}
