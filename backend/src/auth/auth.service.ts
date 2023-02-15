import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { EmployeeCredentialsDto } from './dto/employee-credentials.dto';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { JwtEmployeePayload } from './jwt-employee-payload.interface';
import { map } from 'rxjs';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';

@Injectable()
export class AuthService {
    constructor (
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,
        private pharmaciesService: PharmaciesService,
        private jwtService: JwtService,
    ) {}

    async signUp(createEmployeeDto: CreateEmployeeDto): Promise<void> {
        const employee: Employee = new Employee();

        employee.name = createEmployeeDto.name;
        employee.pharmacy = createEmployeeDto.pharmacy;
        employee.privilages = createEmployeeDto.privilages;

        employee.salt = await bcrypt.genSalt();
        employee.username = createEmployeeDto.username;
        employee.password = await this.hashPassword(createEmployeeDto.password, employee.salt);

        try {
            await this.employeeRepository.save(employee);
        } catch (error) {
            if (error.code == "23505") {
                throw new ConflictException(`User with the username ${employee.username} already exists. Pick another username.`);
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async logIn(employeeCredentialsDto: EmployeeCredentialsDto): Promise<{ accessToken: string }> {
        const employee: Employee = await this.validateEmployeeCredentials(employeeCredentialsDto);

        if (!employee) {
            throw new UnauthorizedException(`Something is wrong.`);
        }

        const payload: JwtEmployeePayload = {
            username: employee.username,
            pharmacy: employee.pharmacy.pharmacyName,
            privilages: employee.privilages.map(privilage => privilage.privilageName)
        };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }

    async validateEmployeeCredentials(employeeCredentialsDto: EmployeeCredentialsDto): Promise<Employee> {
        let { username, password, pharmacyId } = employeeCredentialsDto;

        const employee: Employee = await this.employeeRepository.findOne({ where: { username } });
        const pharmacy: Pharmacy = await this.pharmaciesService.findOne( pharmacyId );

        if (employee && pharmacy && await employee.checkPassword(password) && await employee.checkPharmacy(pharmacy)) {
            return employee;
        } else {
            return null;
        }
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }
}