import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

export class EmployeeRolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) {}

    canActivate(context: ExecutionContext): boolean {
        return false;
    }
}