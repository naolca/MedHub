import { PartialType } from '@nestjs/mapped-types';
import { AuthCredentialsDto } from './auth-credentials.dto';

export class EmployeeCredentialsDto extends PartialType(AuthCredentialsDto) {
    pharmacyId: number;
}
