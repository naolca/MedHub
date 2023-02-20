import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Employee } from '../entities/user.entity';

export const GetEmployee = createParamDecorator(
  (_data, ctx: ExecutionContext): Employee => {
    const req = ctx.switchToHttp().getRequest();
    return req.employee;
  },
);
