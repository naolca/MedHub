import { Injectable } from '@nestjs/common';
import { Medicine } from './medicine.model';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';

@Injectable()
export class MedicinesService {
    private medicines: Medicine[] = [];
    private id: number = 0;

    getAllMedicines(): Medicine[] {
        return this.medicines;
    }

    getMedicineById(id: number): Medicine {
        for (const medicine of this.medicines) {
            if (medicine.id == id) {
                return medicine;
            }
        }
    }

    getFilteredMedicines(filterDto: GetMedicinesFilterDto): Medicine[] {
        let medicines: Medicine[] = this.getAllMedicines();

        const { key } = filterDto;

        if (key) {
            medicines = medicines.filter(medicine => 
                medicine.brandName.includes(key) || 
                medicine.genericName.includes(key),
                );
        }
        
        return medicines;
    }

    createMedicine(createMedicineDto: CreateMedicineDto): Medicine {
        this.id += 1;
        const {genericName, brandName, batchNumber, ammount, receivingAddress, storageConditions, expiryDate, pharmacyName, pharmacyLocation} = createMedicineDto;

        const medicine: Medicine = {
            id: this.id,
            genericName,
            brandName,
            batchNumber,
            ammount,
            receivingAddress,
            storageConditions,
            expiryDate,
            pharmacyName,
            pharmacyLocation,
        }

        this.medicines.push(medicine);

        return medicine;
    }
}
