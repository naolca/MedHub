import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    createMedicine(createMedicineDto: CreateMedicineDto): Medicine;
    getAllMedicines(): Medicine[];
    getMedicine(id: number): Medicine;
    updateMedicine(id: number, updateMedicineDto: UpdateMedicineDto): Medicine;
    removeMedicine(id: number): void;
    searchByName(searchKey: string): Medicine[];
}
