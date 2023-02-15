import { Injectable } from '@nestjs/common';
import { CreatePrivilageDto } from './dto/create-privilage.dto';
import { UpdatePrivilageDto } from './dto/update-privilage.dto';

@Injectable()
export class PrivilagesService {
  create(createPrivilageDto: CreatePrivilageDto) {
    return 'This action adds a new privilage';
  }

  findAll() {
    return `This action returns all privilages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} privilage`;
  }

  update(id: number, updatePrivilageDto: UpdatePrivilageDto) {
    return `This action updates a #${id} privilage`;
  }

  remove(id: number) {
    return `This action removes a #${id} privilage`;
  }
}
