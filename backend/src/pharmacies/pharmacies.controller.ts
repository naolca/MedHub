import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { GetAdministrator } from 'src/administrators/get-administrator.decorator';

@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createPharmacyDto: CreatePharmacyDto, @GetAdministrator() administrator) {
    return this.pharmaciesService.create(createPharmacyDto);
  }]
  

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
