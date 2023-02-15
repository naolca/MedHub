import { PartialType } from '@nestjs/mapped-types';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { Privilage } from 'src/privilages/entities/privilage.entity';
import { AuthCredentialsDto } from './auth-credentials.dto';

export class CreateEmployeeDto extends PartialType(AuthCredentialsDto) {
    name: string;
    pharmacy: Pharmacy;
    privilages: Privilage[];
}