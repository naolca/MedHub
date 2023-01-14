import { Medicine } from './medicine.model';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';
export declare class MedicinesService {
    private medicines;
    private id;
    getAllMedicines(): Medicine[];
    getFilteredMedicines(filterDto: GetMedicinesFilterDto): Medicine[];
    createMedicine(createMedicineDto: CreateMedicineDto): Medicine;
}
