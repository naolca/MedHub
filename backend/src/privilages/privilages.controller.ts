import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivilagesService } from './privilages.service';
import { CreatePrivilageDto } from './dto/create-privilage.dto';
import { UpdatePrivilageDto } from './dto/update-privilage.dto';

@Controller('privilages')
export class PrivilagesController {
  constructor(private readonly privilagesService: PrivilagesService) {}

  @Post()
  create(@Body() createPrivilageDto: CreatePrivilageDto) {
    return this.privilagesService.create(createPrivilageDto);
  }

  @Get()
  findAll() {
    return this.privilagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privilagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivilageDto: UpdatePrivilageDto) {
    return this.privilagesService.update(+id, updatePrivilageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privilagesService.remove(+id);
  }
}
