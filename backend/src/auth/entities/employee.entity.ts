import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Privilage } from "src/privilages/entities/privilage.entity";
import { User } from "./user.entity";
import { Pharmacy } from "src/pharmacies/entities/pharmacy.entity";

@Entity()
export class Employee extends User {
    @Column()
    name: string;

    @ManyToOne(() => Pharmacy, pharmacy => pharmacy.employees, {
        cascade: true
    })
    pharmacy: Pharmacy;

    @ManyToMany(() => Privilage, privilage => privilage.employees, {
        cascade: true
    })
    @JoinTable()
    privilages: Privilage[];
}