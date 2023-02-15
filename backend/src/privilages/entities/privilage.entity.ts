import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { Administrator } from "src/auth/entities/administrator.entity";
import { Employee } from "src/auth/entities/employee.entity";

@Entity()
export class Privilage {
    @PrimaryGeneratedColumn()
    privilageId: number;

    @Column()
    privilageName: string;

    @Column()
    privilageType: string;

    @ManyToMany(() => Employee, employee => employee.privilages)
    employees: Employee[];

    @ManyToMany(() => Administrator, administrator => administrator.privilages)
    administrators: Administrator[];
}
