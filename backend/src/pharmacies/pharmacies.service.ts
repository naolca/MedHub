import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { Pharmacy } from './entities/pharmacy.entity';

@Injectable()
export class PharmaciesService {
  constructor(
    @InjectRepository(Pharmacy)
      private readonly pharmacyRepository: Repository<Pharmacy>
  ){}

  //new pharmacy registration  
  async create(createPharmacyDto: CreatePharmacyDto) {
    const pharmacy=new Pharmacy();

    pharmacy.pharmacyName=createPharmacyDto.pharmacyName;
    pharmacy.pharmacyTinNo=createPharmacyDto.pharmaTinNo;
    pharmacy.branchNum=createPharmacyDto.branchNum;
    pharmacy.latitude=createPharmacyDto.latitude;
    pharmacy.longitude=createPharmacyDto.longitude;

    return await this.pharmacyRepository.save(pharmacy);
  }

  async findAll() {
    return await this.pharmacyRepository.find();
  }

  async findNearestPharmacies(
        latitude: number,
        longitude: number,
        limit = 5,
      ): Promise<Pharmacy[]> {

        const earthRadius = 6371;
        const radianLat = (Math.PI / 180) * latitude;
        const radianLng = (Math.PI / 180) * longitude;
    
        const pharmacies = await this.pharmacyRepository.find();
    
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
  
  async findOne(pharmacyId: number): Promise<Pharmacy> {
    return await this.pharmacyRepository.findOne( { where: { pharmacyId } } );
  }

  update(id: number, updatePharmacyDto: UpdatePharmacyDto) {
    return `This action updates a #${id} pharmacy`;
  }

  async remove(id: number) {
    return await this.pharmacyRepository.delete(id)
  }
}
