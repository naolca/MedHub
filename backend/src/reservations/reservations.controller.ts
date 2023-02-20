import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}
  @Post()
  async addReservation(@Body() reservation:CreateReservationDto){
    return await this.reservationsService.addReservation(reservation);
  }

  @Get()
  async findAll(): Promise<Reservation[]> {
    console.log("i'm here")
    return await this.reservationsService.getAllReservation();
  }
  @Get()
  async findByPharmacy(pharmacyId: number){
    return await this.reservationsService.findByPharmacy(pharmacyId)
  }
  @Delete(':id')
  async remove(@Param('id') id: number){
    return await this.reservationsService.removeReservation(id);
  }

  @Get(':phoneNumber')
  async findByPhoneNumber(@Param('phoneNumber') phoneNumber: string) {
    return await this.reservationsService.findByPhoneNumber(phoneNumber);
  }
  

}
