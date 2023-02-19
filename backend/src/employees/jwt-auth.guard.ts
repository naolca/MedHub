import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt-employee') {
    canActivate(context: ExecutionContext) {
        console.log(context);
        return super.canActivate(context);
    }

    handleRequest(err, employee, info) {
        console.log(employee);
        if (err || !employee) {
            throw err || new UnauthorizedException();
        }
        return employee;
    }
}
