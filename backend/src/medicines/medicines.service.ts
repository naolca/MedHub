import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';
import { Medicine } from './entities/medicine.entity';
import { PharmacyMedicine } from './entities/pharmacy-medicine.entity';

@Injectable()
export class MedicinesService {
    constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
    private readonly pharmaciesService: PharmaciesService,
    @InjectRepository(PharmacyMedicine)
    private readonly PharmacyMedicineRepository: Repository<PharmacyMedicine>,
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

    async createMedicine(

        createMedicineDto: CreateMedicineDto,
        pharmacy: Pharmacy,

        ): Promise<Medicine> {

        let medicine: Medicine = new Medicine();

        medicine.genericName = createMedicineDto.genericName;
        medicine.brandName = createMedicineDto.brandName;
        medicine.batchNumber = createMedicineDto.batchNumber;
        medicine.expiryDate = createMedicineDto.expiryDate;
        medicine.receivingAddress = createMedicineDto.receivingAddress;
        medicine.storageConditions = createMedicineDto.storageConditions;

        if (! await this.medicineRepository.save(medicine) ) {
            medicine = await this.getFilteredMedicines( { key: createMedicineDto.brandName } )[0];
        }

        return medicine;
    }


    // add medicine to specific pharmacy
    async addMedicineToPharmacy(
        pharmacyId: number,
        medicineId: number,
        quantity: number,
        brandName:string
      ): Promise<{}> {
        const pharmacy = await this.pharmaciesService.findOne(pharmacyId);
        const medicine = await this.getMedicineById(medicineId);
    
        const inventory = new PharmacyMedicine();
        inventory.quantity = quantity;
        inventory.pharmacy = pharmacy;
        inventory.medicine = medicine;
        inventory.brandname=brandName;
    
        await this.PharmacyMedicineRepository.save(inventory);
        return {"status": "successfully added"}
      }

      //get all medicine from a specific pharmacy 
      async getMedicinesByPharmacyId(pharmacyId: number): Promise<Medicine[]> {
        return await this.medicineRepository
          .createQueryBuilder('medicine')
          .leftJoinAndSelect('medicine.pharmacyMedicines', 'pharmacy_medicine')
          .leftJoinAndSelect('pharmacy_medicine.pharmacy', 'pharmacy')
          .where('pharmacy.id = :pharmacyId', { pharmacyId })
          .select([
            'medicine.genericName',
            'medicine.batchNumber',
            'medicine.storageConditions',
            'medicine.expiryDate',
            'pharmacy_medicine.brandname',
            'pharmacy_medicine.quantity'
          ])
          .getMany();
      }

      // update quantity of a medicine with in a specific pharmacy 
      async updateQuantity(
        pharmacyId: number,
        medicineId: number,
        quantity: number,
        brandName:string
      ): Promise<PharmacyMedicine> {
        const pharmacyMedicine = await this.PharmacyMedicineRepository.findOne({
          where: {
            pharmacy: { id: pharmacyId },
            medicine: { id: medicineId },
            brandname:brandName
          }
        });
        if (!pharmacyMedicine) {
          throw new Error('Pharmacy does not have this medicine in stock');
        }
        pharmacyMedicine.quantity = quantity;
        return this.PharmacyMedicineRepository.save(pharmacyMedicine);
      }



      // used in the search of nearest pharmacies
      async findMedicineByName(medicineName:string){

      return await this.medicineRepository
      .createQueryBuilder('medicine')
      .where('LOWER(medicine.genericName) = LOWER(:medicineName)', { medicineName })
      .getOne();
      
      }

}