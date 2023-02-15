import { createParamDecorator } from '@nestjs/common';
import { Administrator } from './entities/administrator.entity';

export const GetAdministrator = createParamDecorator((data, req): Administrator => {
  return req.administrator;
});