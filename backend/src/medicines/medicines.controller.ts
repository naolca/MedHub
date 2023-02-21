import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { GetMedicinesFilterDto } from './dto/get-medicines-filter.dto';
import { Medicine } from './entities/medicine.entity';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetPharmacy } from 'src/employees/get-pharmacy.decorator';
import { PassportModule } from '@nestjs/passport';

@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}


   //getmedicineByName
   @Get()
   findMedicineByName(@Query('medname') medname:string){
     return this.medicinesService.findMedicineByName(medname);
   }
   
  /**
   * Gets all medicines matching the filtering criteria.
   * 
   * @param filterDto the filtering string.
   * @throws {NotFoundException} If no medicines that match the criteria were found.
   * @returns A promise that resolves to a list of medicines.
   */
  @Get()
  async getMedicines(@Query() filterDto: GetMedicinesFilterDto): Promise<Medicine[]>{
    // If no filtering string was provided, return all medicines. Else, return the filtered medicines.
    if (!Object.keys(filterDto).length) {
      return this.medicinesService.getAllMedicines();
    }

    return this.medicinesService.getFilteredMedicines(filterDto);
  }

  /**
   * Gets the medicine with the given ID.
   * 
   * @param id The id of the medicine needed.
   * @throws {NotFoundException} if the medicine with the given ID was not found.
   * @returns A promise that resolves to a medicine.
   */
  @Get('/:id')
  async getMedicineById(@Param('id') id: number): Promise<Medicine> {
    return await this.medicinesService.getMedicineById(id);
  }

  /**
   * Adds a new medicine to the database.
   * 
   * @param createMedicineDto The data for the new medicine.
   * @returns A promise that resolves to the newly created medicine.
   */
  @Post()
  // @UseGuards(AuthGuard())
  async createMedicine(
    @Body() createMedicineDto: CreateMedicineDto,
    @GetPharmacy() pharmacy: Pharmacy
    ): Promise<Medicine> {
    return await this.medicinesService.createMedicine(createMedicineDto, pharmacy);
  }


  // http://localhost:3000/medicines/<:pharmacyId>/medicines/<:medicineId>
  
  @Post(':pharmacyId/medicines/:medicineId')
  async addMedicineToPharmacy(
    @Param('pharmacyId', ParseIntPipe) pharmacyId: number,
    @Param('medicineId', ParseIntPipe) medicineId: number,
    @Body() createMedicineDto: CreateMedicineDto,
  ): Promise<void> {
    
    // const medicine=await this.medicinesService.getMedicineById(medicineId);
    await this.medicinesService.addMedicineToPharmacy(
      pharmacyId,
      medicineId,
      createMedicineDto.quantity,
      createMedicineDto.brandName
    );
  }


// I think this controller should be in the pharmacy ....... 

// http://localhost:3000/medicines/:<pharmacyId>/medicines

  @Get(':pharmacyId/medicines')
  async getMedicinesByPharmacyId(@Param('pharmacyId') pharmacyId: number): Promise<Medicine[]> {
      return this.medicinesService.getMedicinesByPharmacyId(pharmacyId);
}

//update quantity 
// http://localhost:3000/medicines/:pharmacyId/:medicineId?brandname=:brandName

  @Patch(':pharmacyId/:medicineId')
  async updateQuantity(
    @Param('pharmacyId') pharmacyId: number,
    @Param('medicineId') medicineId: number,
    @Query('brandname') brandName: string,
    @Body('quantity') quantity: number,
  ) {
    return this.medicinesService.updateQuantity(
      pharmacyId,
      medicineId,
      quantity,
      brandName
    );
}

 

}