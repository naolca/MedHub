"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicinesService = void 0;
const common_1 = require("@nestjs/common");
let MedicinesService = class MedicinesService {
    constructor() {
        this.medicines = [];
        this.id = 0;
    }
    getAllMedicines() {
        return this.medicines;
    }
    getFilteredMedicines(filterDto) {
        let medicines = this.getAllMedicines();
        const { key } = filterDto;
        if (key) {
            medicines = medicines.filter(medicine => medicine.brandName.includes(key) ||
                medicine.genericName.includes(key));
        }
        return medicines;
    }
    createMedicine(createMedicineDto) {
        this.id += 1;
        const { genericName, brandName, batchNumber, ammount, receivingAddress, storageConditions, expiryDate, pharmacyName, pharmacyLocation } = createMedicineDto;
        const medicine = {
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
        };
        this.medicines.push(medicine);
        return medicine;
    }
};
MedicinesService = __decorate([
    (0, common_1.Injectable)()
], MedicinesService);
exports.MedicinesService = MedicinesService;
//# sourceMappingURL=medicines.service.js.map