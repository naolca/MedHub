import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDTO } from './dto/create-reservation.dto';
import { ReservationEntity } from './entities/reservation.entity';



@Injectable()
export class ReservationService {
  
    constructor(
      @InjectRepository(ReservationEntity)
      private readonly reservationsRepository: Repository<ReservationEntity>,
    ) {}

  /*
  helps to fetch all reservations regardless of the pharmacy 
  */
  async findAll(): Promise<ReservationEntity[]> {
    return await this.reservationsRepository.find();
  }

  async create(createReservationDto: CreateReservationDTO): Promise<{}> {
    const reservation = new ReservationEntity();
    reservation.pharmacyId = createReservationDto.pharmacyId;
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
  async findByPhoneNumber(phoneNumber: string): Promise<ReservationEntity[]> {
    return await this.reservationsRepository.find({ where: { phoneNumber } });
  }
 
  /**
   helps to send all reservation for a pharmacy with an id   
  **/
  async findByPharmacyId(pharmacyId: string): Promise<ReservationEntity[]> {
    return await this.reservationsRepository.find({ where: { pharmacyId } });
  }
  /**
   helps to send all reservation for a medicine with an id   
  **/
  async findByMedicineId(medicineId: string): Promise<ReservationEntity[]> {
    return await this.reservationsRepository.find({ where: { medicineId } });
  }
}
