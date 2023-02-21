import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDTO } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';



@Injectable()
export class ReservationsService {
  
    constructor(
      @InjectRepository(Reservation)
      private readonly reservationsRepository: Repository<Reservation>,
    ) {}

  /*
  helps to fetch all reservations regardless of the pharmacy 
  */
  async findAll(): Promise<Reservation[]> {
    return await this.reservationsRepository.find();
  }

  // needs to be refactored since the schema has changed !!!
  async create(createReservationDto: CreateReservationDTO): Promise<{}> {
    const reservation = new Reservation();
    reservation.pharmacy = createReservationDto.pharmacyId;
    reservation.phoneNumber = createReservationDto.phoneNumber;
    const reserved= await this.reservationsRepository.save(reservation);
    if (reserved){
      return {"status":true,"reserved":reserved}
    }
    return {"status":true,"reserved":[]}
  }
 
    /**
    helps in the user side to getAll of his reservations .... not sure if it works 
  **/
  async findByPhoneNumber(phoneNumber: string): Promise<Reservation[]> {
    return await this.reservationsRepository.find({ where: { phoneNumber } });
  }
 
  /**
   helps to send all reservation for a pharmacy with an id   
  **/
  // Again, regressed since schema was changed
  async findByPharmacyId(pharmacyId: string): Promise<Reservation[]> {
    return await this.reservationsRepository.find({ where: { pharmacyId } });
  }
  /**
   helps to send all reservation for a medicine with an id   
  **/
  // Again, regressed since schema was changed
  async findByMedicineId(medicineId: string): Promise<Reservation[]> {
    return await this.reservationsRepository.find({ where: { medicineId } });
  }
}
