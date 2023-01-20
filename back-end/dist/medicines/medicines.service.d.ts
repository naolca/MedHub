import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';
export declare class MedicinesService {
    private medicines;
    private id;
    createMedicine(createMedicineDto: CreateMedicineDto): Medicine;
    getAllMedicines(): any[];
    getMedicine(id: number): Medicine;
    updateMedicine(id: number, updateMedicineDto: UpdateMedicineDto): Medicine;
    removeMedicine(id: number): void;
    searchByName(searchKey: string): Medicine[];
}
