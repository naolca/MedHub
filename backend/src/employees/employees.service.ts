import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';
import * as bcrypt from "bcrypt";
import { EmployeeCredentialsDto } from './dto/employee-credentials.dto';
import { JwtEmployeePayload } from './jwt-employee-payload.interface';

@Injectable()
export class EmployeesService {
  constructor (
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,
        private pharmaciesService: PharmaciesService,
        private jwtService: JwtService,
    ) {}

    async getAllEmployees(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async signUp(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        const employee: Employee = new Employee();

        employee.name = createEmployeeDto.name;
        employee.role = createEmployeeDto.role;
        employee.pharmacy = await this.pharmaciesService.findOne( createEmployeeDto.pharmacyId );

        if (!employee.pharmacy) {
            throw new BadRequestException(`Pharmacy with the id ${createEmployeeDto.pharmacyId} does not exist.`);
        }

        employee.salt = await bcrypt.genSalt();
        employee.username = createEmployeeDto.username;
        employee.password = await this.hashPassword(createEmployeeDto.password, employee.salt);

        try {
            return await this.employeeRepository.save(employee);
        } catch (error) {
            console.log(error.code);
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
            role: employee.role,
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
