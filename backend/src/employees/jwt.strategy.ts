import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { EmployeesService } from "./employees.service";
import { JwtEmployeePayload } from "./jwt-employee-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private employeesService: EmployeesService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearer(),
            secretOrKey: "MedHub",
        });
    }

    validate(payload: JwtEmployeePayload) {
        const { username, password, pharmacyId } = payload;
    }
}