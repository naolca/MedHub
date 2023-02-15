import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Privilage } from "src/privilages/entities/privilage.entity";
import { User } from "./user.entity";

@Entity()
export class Employee extends User {
    @Column()
    name: string;

    @ManyToMany(() => Privilage, privilage => privilage.employees, {
        cascade: true
    })
    @JoinTable()
    privilages: Privilage[];
}