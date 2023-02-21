import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/medicines/entities/medicine.entity';
import { Repository } from 'typeorm';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { Pharmacy } from './entities/pharmacy.entity';

@Injectable()
export class PharmaciesService {
  constructor(
    @InjectRepository(Pharmacy)
    private readonly pharmacyRepository: Repository<Pharmacy>,
    @InjectRepository(Medicine)
    private readonly medicinesRepository: Repository<Medicine>
  ) { }

  //new pharmacy registration  
  async create(createPharmacyDto: CreatePharmacyDto) {
    const pharmacy = new Pharmacy();

    pharmacy.pharmacyName = createPharmacyDto.pharmacyName;
    pharmacy.pharmacyTinNo = createPharmacyDto.pharmaTinNo;
    pharmacy.branchNum = createPharmacyDto.branchNum;
    pharmacy.latitude = createPharmacyDto.latitude;
    pharmacy.longitude = createPharmacyDto.longitude;

    return await this.pharmacyRepository.save(pharmacy);
  }

  async findAll() {
    return await this.pharmacyRepository.find();
  }

  async findNearestPharmacies(
    latitude: number,
    longitude: number,
    pharmacies: Pharmacy[],
    limit = 8,
  ): Promise<Pharmacy[]> {

    const earthRadius = 6371;
    const radianLat = (Math.PI / 180) * latitude;
    const radianLng = (Math.PI / 180) * longitude;

    // const pharmacies = await this.pharmacyRepository.find();

    const sortedPharmacies = pharmacies
      .map(pharmacy => {
        const pharmacyLat = (Math.PI / 180) * pharmacy.latitude;
        const pharmacyLng = (Math.PI / 180) * pharmacy.longitude;

        const distance =
          earthRadius *
          Math.acos(
            Math.cos(radianLat) *
            Math.cos(pharmacyLat) *
            Math.cos(pharmacyLng - radianLng) +
            Math.sin(radianLat) * Math.sin(pharmacyLat),
          );

        return { ...pharmacy, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    return sortedPharmacies.slice(0, limit);
  }

  async findOne(id: number): Promise<Pharmacy> {
    return await this.pharmacyRepository.findOne({ where: { id } });
  }

  update(id: number, updatePharmacyDto: UpdatePharmacyDto) {
    return `This action updates a #${id} pharmacy`;
  }

  async remove(id: number) {
    return await this.pharmacyRepository.delete(id)
  }

  async findNearestPharmacyWithDrug(medicineName: string, latitude: number, longitude: number): Promise<any> {
    const pharmacies = await this.pharmacyRepository
      .createQueryBuilder('pharmacy')
      .leftJoin('pharmacy.pharmacyMedicines', 'pharmacy_medicine')
      .leftJoin('pharmacy_medicine.medicine', 'medicine')
      .where('LOWER(medicine.genericName) = LOWER(:medicineName)', { medicineName })
      .andWhere('pharmacy_medicine.quantity > 0')
      .getMany();
    const nearest = await this.findNearestPharmacies(latitude, longitude, pharmacies)
    // return this.medicinesRepository.find();
    return nearest;
  }

  // .createQueryBuilder('medicine')
  //           .leftJoinAndSelect('medicine.pharmacyMedicines', 'pharmacy_medicine')
  //           .leftJoinAndSelect('pharmacy_medicine.pharmacy', 'pharmacy')
  //           .where('pharmacy.id = :pharmacyId', { pharmacyId })
  //           .select([
  //             'medicine.genericName',
  //             'medicine.batchNumber',
  //             'medicine.storageConditions',
  //             'medicine.expiryDate',
  //             'pharmacy_medicine.brandname',
  //             'pharmacy_medicine.quantity'
  //           ])
  //           .getMany();
}