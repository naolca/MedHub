import { createParamDecorator } from '@nestjs/common';
import { Administrator } from './entities/administrator.entity';

export const GetAdministrator = createParamDecorator((data, req): Administrator => {
  console.log("hello");
  return req.administrator;
});