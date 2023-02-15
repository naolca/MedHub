import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDTO } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async findAll(): Promise<Reservation[]> {
    return await this.reservationsService.findAll();
  }

  @Post()
  async create(@Body() reservation: CreateReservationDTO): Promise<{}> {
   
    // const Reservation = plainToClass(Reservation, reservation); we can use this if the reservartion doesn't match the entity
    
    return await this.reservationsService.create(reservation);
  }

  @Get('phonenum/:phoneNumber')
  async findByPhoneNumber(@Param('phoneNumber') phoneNumber: string): Promise<Reservation[]> {
    return await this.reservationsService.findByPhoneNumber(phoneNumber);
  }

  @Get('pharmacy/:pharmacyId')
  async findByPharmacyId(@Param('pharmacyId') pharmacyId: string): Promise<Reservation[]> {
    return await this.reservationsService.findByPharmacyId(pharmacyId);
  }

  @Get('medicine/:medicineId')
  async findByMedicineId(@Param('medicineId') medicineId: string): Promise<Reservation[]> {
    return await this.reservationsService.findByMedicineId(medicineId);
  }
}
