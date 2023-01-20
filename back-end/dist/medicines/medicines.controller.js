"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicinesController = void 0;
const common_1 = require("@nestjs/common");
const medicines_service_1 = require("./medicines.service");
const create_medicine_dto_1 = require("./dto/create-medicine.dto");
const update_medicine_dto_1 = require("./dto/update-medicine.dto");
const medicine_entity_1 = require("./entities/medicine.entity");
let MedicinesController = class MedicinesController {
    constructor(medicinesService) {
        this.medicinesService = medicinesService;
    }
    createMedicine(createMedicineDto) {
        return this.medicinesService.createMedicine(createMedicineDto);
    }
    getAllMedicines() {
        return this.medicinesService.getAllMedicines();
    }
    getMedicine(id) {
        return this.medicinesService.getMedicine(id);
    }
    updateMedicine(id, updateMedicineDto) {
        return this.medicinesService.updateMedicine(id, updateMedicineDto);
    }
    removeMedicine(id) {
        return this.medicinesService.removeMedicine(id);
    }
    searchByName(searchKey) {
        return this.medicinesService.searchByName(searchKey);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_dto_1.CreateMedicineDto]),
    __metadata("design:returntype", medicine_entity_1.Medicine)
], MedicinesController.prototype, "createMedicine", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MedicinesController.prototype, "getAllMedicines", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", medicine_entity_1.Medicine)
], MedicinesController.prototype, "getMedicine", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_medicine_dto_1.UpdateMedicineDto]),
    __metadata("design:returntype", medicine_entity_1.Medicine)
], MedicinesController.prototype, "updateMedicine", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MedicinesController.prototype, "removeMedicine", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('searchKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MedicinesController.prototype, "searchByName", null);
MedicinesController = __decorate([
    (0, common_1.Controller)('medicines'),
    __metadata("design:paramtypes", [medicines_service_1.MedicinesService])
], MedicinesController);
exports.MedicinesController = MedicinesController;
//# sourceMappingURL=medicines.controller.js.map