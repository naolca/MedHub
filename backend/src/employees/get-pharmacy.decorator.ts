import { createParamDecorator } from '@nestjs/common';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';

export const GetPharmacy = createParamDecorator((data, req): Pharmacy => {
  return req.pharmacy;
});