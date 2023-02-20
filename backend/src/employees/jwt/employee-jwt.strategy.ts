import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { EmployeeJwtPayload } from './employee-jwt-payload.interface';

@Injectable()
export class EmployeeJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private configService: ConfigService,
    private pharmaciesService: PharmaciesService,
  ) {
    super({
      secretOrKey: "MedHub",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: EmployeeJwtPayload): Promise<Employee> {
    const { username, pharmacyId } = payload;
    const user: Employee = await this.employeeRepository.findOne({ where: { username }});
    const pharmacy: Pharmacy = await this.pharmaciesService.getpharmacyById( pharmacyId );

    if (!user || !user.checkPharmacy(pharmacy)) {
      throw new UnauthorizedException(`Hello world!`);
    }

    return user;
  }
}
