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
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }

    @Column()
    name: string;

    @ManyToOne(() => Pharmacy, pharmacy => pharmacy.employees, {
        cascade: true
    })
    pharmacy: Pharmacy;

    checkPharmacy(pharmacy: Pharmacy): boolean {
        if (!pharmacy) {
            return (false);
        }

        if (!(pharmacy.employees.includes(this))) {
            return (false);
        }

        return (true);
    }
}

