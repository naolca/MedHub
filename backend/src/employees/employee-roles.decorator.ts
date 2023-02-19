import { SetMetadata } from '@nestjs/common';

export const EmployeeRoles = (...roles: string[]) => SetMetadata('role', roles);
