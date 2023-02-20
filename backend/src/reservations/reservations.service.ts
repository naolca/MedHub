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
    private readonly reservation: Reservation,
  ) {}

  async addReservation(createReservationDto: CreateReservationDto) {
    const { medicineId, pharmacyId, phoneNumber } = createReservationDto;

    const medicine: Medicine = await this.medicinesService.getMedicineById(medicineId);
    const pharmacy: Pharmacy = await this.pharmaciesService.findOne(pharmacyId);

    const reservation: Reservation = new Reservation();

    reservation.phoneNumber = phoneNumber;
    reservation.addPharmacy(pharmacy);
    reservation.addMedicine(medicine);

    this.reservationsRepository.save(reservation);
    return reservation
  }
  async getAllReservation(){
    return this.reservationsRepository.find({relations: ["medicine","pharmacy"]})
  }

  async removeReservation(id: number){
    return await this.reservationsRepository.delete(id)
  }
  async findByPhoneNumber(phoneNumber){
    console.log("i'm here")
    return await this.reservationsRepository.find({where:phoneNumber})
  }
  async findByPharmacy(pharmacyId){
    return this.reservation.pharmacy.pharmacyId == pharmacyId
  }

}
