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
    createMedicine(createMedicineDto) {
        const { genericName, brandName, batchNo, amount, receivingAddress, storageCondition, expiryDate } = createMedicineDto;
        let medicine = {
            id: this.id,
            genericName: genericName,
            brandName: brandName,
            batchNo: batchNo,
            amount: amount,
            receivingAddress: receivingAddress,
            storageCondition: storageCondition,
            expiryDate: expiryDate,
        };
        this.id += 1;
        this.medicines.push(medicine);
        return medicine;
    }
    getAllMedicines() {
        return this.medicines;
    }
    getMedicine(id) {
        let medicineId = 0;
        for (medicineId = 0; medicineId < this.medicines.length; medicineId++) {
            if (medicineId == id)
                break;
        }
        return this.medicines[medicineId];
    }
    updateMedicine(id, updateMedicineDto) {
        const { genericName, brandName, batchNo, amount, receivingAddress, storageCondition, expiryDate } = updateMedicineDto;
        let medicine = this.getMedicine(id);
        if (genericName)
            medicine.genericName = genericName;
        if (brandName)
            medicine.brandName = brandName;
        if (batchNo)
            medicine.batchNo = batchNo;
        if (amount)
            medicine.amount = amount;
        if (receivingAddress)
            medicine.receivingAddress = receivingAddress;
        if (storageCondition)
            medicine.storageCondition = storageCondition;
        if (expiryDate)
            medicine.expiryDate = expiryDate;
        return medicine;
    }
    removeMedicine(id) {
        let medicineId = 0;
        for (medicineId = 0; medicineId < this.medicines.length; medicineId++) {
            if (medicineId == id)
                break;
        }
        this.medicines.splice(medicineId + 1, 1);
    }
    searchByName(searchKey) {
        let medicines = this.medicines;
        medicines = medicines.filter(medicine => {
            console.log(medicine.brandName, searchKey, medicine.brandName.includes(searchKey));
            medicine.brandName.includes(searchKey) || medicine.genericName.includes(searchKey);
        });
        return medicines;
    }
};
MedicinesService = __decorate([
    (0, common_1.Injectable)()
], MedicinesService);
exports.MedicinesService = MedicinesService;
//# sourceMappingURL=medicines.service.js.map