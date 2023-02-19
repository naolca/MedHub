import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

import { Pharmacy } from "src/pharmacies/entities/pharmacy.entity";
import { EmployeeRoleTypes } from "../roles/employee.roles";

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({ default: EmployeeRoleTypes.Employee })
    role: EmployeeRoleTypes;

    async checkPassword(password: string): Promise<boolean> {
        // const hash = await bcrypt.hash(password, this.salt);
        // return hash === this.password;

        return this.password === password;
    }

    @Column()
    name: string;

    @ManyToOne(() => Pharmacy, pharmacy => pharmacy.employees, {
        cascade: true
    })
    pharmacy: Pharmacy;

    async checkPharmacy(pharmacy: Pharmacy): Promise<boolean> {
        if (!pharmacy) {
            return (false);
        }

        if (!pharmacy.employees.some(e => e.id === this.id)) {
            return false;
        }

        return (true);
    }
}

