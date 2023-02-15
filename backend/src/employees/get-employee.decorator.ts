import { createParamDecorator } from '@nestjs/common';
import { Employee } from './entities/employee.entity';

export const GetEmployee = createParamDecorator((data, req): Employee => {
  return req.employee;
});