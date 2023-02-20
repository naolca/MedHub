import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/medicines/entities/medicine.entity';
import { MedicinesService } from 'src/medicines/medicines.service';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';



@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationsRepository: Repository<Reservation>,
    private readonly medicinesService: MedicinesService,
    private readonly pharmaciesService: PharmaciesService,
  ) {}

  async addReservation(createReservationDto: CreateReservationDto) {
    const { medicineId, pharmacyId, phoneNumber } = createReservationDto;

    const medicine: Medicine = await this.medicinesService.getMedicineById(medicineId);
    const pharmacy: Pharmacy = await this.pharmaciesService.getpharmacyById(pharmacyId);

    const reservation: Reservation = new Reservation();

    reservation.phoneNumber = phoneNumber;
    reservation.addPharmacy(pharmacy);
    reservation.addMedicine(medicine);

    this.reservationsRepository.save(reservation);
  }

  // /*
  // helps to fetch all reservations regardless of the pharmacy 
  // */
  // async findAll(): Promise<Reservation[]> {
  //   return await this.reservationsRepository.find();
  // }

  // // needs to be refactored since the schema has changed !!!
  // async create(createReservationDto: CreateReservationDTO): Promise<{}> {
  //   const reservation = new Reservation();
  //   reservation.pharmacyId = createReservationDto.pharmacyId;
  //   reservation.phoneNumber = createReservationDto.phoneNumber;
  //   const reserved= await this.reservationsRepository.save(reservation);
  //   if (reserved){
  //     return {"status":true,"reserved":reserved}
  //   }
  //   return {"status":true,"reserved":[]}
  // }
 
  //   /**
  //   helps in the user side to getAll of his reservations .... not sure if it works 
  // **/
  // async findByPhoneNumber(phoneNumber: string): Promise<Reservation[]> {
  //   return await this.reservationsRepository.find({ where: { phoneNumber } });
  // }
 
  // /**
  //  helps to send all reservation for a pharmacy with an id   
  // **/
  // // Again, regressed since schema was changed
  // async findByPharmacyId(pharmacyId: string): Promise<Reservation[]> {
  //   return await this.reservationsRepository.find({ where: { pharmacyId } });
  // }
  // /**
  //  helps to send all reservation for a medicine with an id   
  // **/
  // // Again, regressed since schema was changed
  // async findByMedicineId(medicineId: string): Promise<Reservation[]> {
  //   return await this.reservationsRepository.find({ where: { medicineId } });
  // }
}
