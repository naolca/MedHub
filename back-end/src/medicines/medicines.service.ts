import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicinesService {
    constructor(
        @InjectRepository(Medicine)
        private medicineRepository: Repository<Medicine>
    ) {}

    /**
     *  
     * @returns All medicines in the database.
     */
    async getAllMedicines(): Promise<Medicine[]> {
        const medicines = await this.medicineRepository.find();

        if (!medicines) {
            throw new NotFoundException();
        }

        return medicines;
    }

    async getMedicineById(id: number): Promise<Medicine> {
        const medicine = await this.medicineRepository.findOne({ where: { id } });

        if (!medicine) {
            throw new NotFoundException(`The requested medicine doesn't exist.`);
        }

        return medicine;
    }

    async getFilteredMedicines(filterDto: GetMedicinesFilterDto): Promise<Medicine[]> {
        const { key } = filterDto;
      
        // if generic name of brand name contain the given key to search
        const medicines = await this.medicineRepository.createQueryBuilder('medicine')
          .where('LOWER(medicine.genericName) LIKE :key', { key: `%${key.toLowerCase()}%` })
          .orWhere('LOWER(medicine.brandName) LIKE :key', { key: `%${key.toLowerCase()}%` })
          .getMany();
      
        if (!medicines) {
          throw new NotFoundException(`Nothing was found with that key.`);
        }
      
        return medicines;
      }      

    async createMedicine(createMedicineDto: CreateMedicineDto): Promise<Medicine> {
        const medicine: Medicine = new Medicine();

        medicine.genericName = createMedicineDto.genericName;
        medicine.brandName = createMedicineDto.brandName;
        medicine.batchNumber = createMedicineDto.batchNumber;
        medicine.ammount = createMedicineDto.ammount;
        medicine.expiryDate = createMedicineDto.expiryDate;
        medicine.receivingAddress = createMedicineDto.receivingAddress;
        medicine.storageConditions = createMedicineDto.storageConditions;

        return await this.medicineRepository.save(medicine);
    }
}