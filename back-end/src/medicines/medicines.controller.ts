import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';
import { Medicine } from './medicine.model';

@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Get()
  getMedicines(@Query() filterDto: GetMedicinesFilterDto): Medicine[] {
    if (Object.keys(filterDto).length) {
      return this.medicinesService.getFilteredMedicines(filterDto);
    }
    return this.medicinesService.getAllMedicines();
  }

  @Get('/:id')
  getMedicineById(@Param('id') id: number): Medicine {
      return this.medicinesService.getMedicineById(id);

  }

  @Post()
  createMedicine(@Body() createMedicineDto: CreateMedicineDto): Medicine {
    return this.medicinesService.createMedicine(createMedicineDto);
  }
}
