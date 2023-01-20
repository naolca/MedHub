import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';

@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  /**
   * creates a new medicine to the database
   * @param createMedicineDto contains data to create a new medicine
   * @returns a medicne object
   */
  @Post()
  createMedicine(@Body() createMedicineDto: CreateMedicineDto): Medicine {
    return this.medicinesService.createMedicine(createMedicineDto);
  }

  /**
   * returns all medicines
   * @returns a list of medicines in the database
   */
  @Get()
  getAllMedicines(): Medicine[] {
    return this.medicinesService.getAllMedicines();
  }

  /**
   * returns a medicine with the given id
   * @param id the id of the wanted medicine
   * @returns a medicine
   */
  @Get(':id')
  getMedicine(@Param('id') id: number): Medicine {
    return this.medicinesService.getMedicine(id);
  }

  /**
   * updated the given medicine
   * @param id the id of the wanted medicine
   * @param updateMedicineDto contains  all information needed to update a medicine
   * @returns a medicine
   */
  @Patch(':id')
  updateMedicine(@Param('id') id: number, @Body() updateMedicineDto: UpdateMedicineDto): Medicine {
    return this.medicinesService.updateMedicine(id, updateMedicineDto);
  }

  /**
   * removes a medicine from the database
   * @param id the id of the wanted medicine
   * @returns void
   */
  @Delete(':id')
  removeMedicine(@Param('id') id: string): void {
    return this.medicinesService.removeMedicine(+id);
  }

  /**
   * searches the database containing the given string
   * @param searchKey string to search the database with
   * @returns a medicine or a 404
   */
  @Get()
  searchByName(@Query('searchKey') searchKey: string): Medicine[] {
    return this.medicinesService.searchByName(searchKey);
  }

}
