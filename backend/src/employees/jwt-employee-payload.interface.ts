import { EmployeeType } from "./enums/employee-type.enum";

/**
 * The JWT will contain the payload username, pharmacy name and privilages in the payload.
 */
export interface JwtEmployeePayload {
    username: string;
    pharmacy: string;
    privilage: EmployeeType;
}