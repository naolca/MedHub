import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivilageDto } from './create-privilage.dto';

export class UpdatePrivilageDto extends PartialType(CreatePrivilageDto) {}
