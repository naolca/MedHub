import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class EmployeeRolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) {
    }
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!requiredRoles) {
          // If the handler doesn't have the @Roles() decorator, allow access
          return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
          // If the user is not authenticated, deny access
          return false;
        }
        const userRole = user.role;
        return requiredRoles.includes(userRole);
      }
    }