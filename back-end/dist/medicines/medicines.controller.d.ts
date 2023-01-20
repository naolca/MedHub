import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    getMedicines(filterDto: GetMedicinesFilterDto): import("./medicine.model").Medicine[];
    createMedicine(createMedicineDto: CreateMedicineDto): import("./medicine.model").Medicine;
}
