import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { EmployeeJwtAuthGuard } from 'src/employees//jwt/jwt-auth.guard';

@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Post()
  @UseGuards(EmployeeJwtAuthGuard)
  create(@Body() createPharmacyDto: CreatePharmacyDto) {
    return this.pharmaciesService.create(createPharmacyDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pharmaciesService.findOne(+id);
  }

  //you can use http://localhost/pharmacies?latitude=<latitude-value>&longitude=<longitude-value>
  @Get()
  findNearestPharmacies( @Query('latitude') latitude: number,
          @Query('longitude') longitude: number,){
    return this.pharmaciesService.findNearestPharmacies(latitude,longitude);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePharmacyDto: UpdatePharmacyDto) {
    return this.pharmaciesService.update(+id, updatePharmacyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pharmaciesService.remove(id);
  }
}
