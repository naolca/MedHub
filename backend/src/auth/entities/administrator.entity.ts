import { Privilage } from "src/privilages/entities/privilage.entity";
import { Entity, JoinTable, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Administrator extends User {
    @ManyToMany(() => Privilage, privilage => privilage.administrators, {
        cascade: true
    })
    @JoinTable()
    privilages: Privilage[];
}