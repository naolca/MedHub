import { createParamDecorator } from '@nestjs/common';
import { User } from './entities/user.entity';

export const GetPharmacy = createParamDecorator((data, req): User => {
  return req.pharmacy;
});