import { EmployeeRoleTypes } from "./roles/employee.roles";

/**
 * The JWT will contain the payload username, pharmacy name and privilages in the payload.
 */
export interface JwtEmployeePayload {
    username: string;
    pharmacy: string;
    role: EmployeeRoleTypes;
}