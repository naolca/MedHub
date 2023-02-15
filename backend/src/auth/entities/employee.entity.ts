import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";

import { Privilage } from "src/privilages/entities/privilage.entity";
import { User } from "./user.entity";
import { Pharmacy } from "src/pharmacies/entities/pharmacy.entity";
import { PharmaciesService } from "src/pharmacies/pharmacies.service";
import { InjectRepository } from "@nestjs/typeorm";

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



  checkPharmacy(pharmacy: Pharmacy): boolean {
    if (!pharmacy) {
      return ( false );
    }

    if ( !( pharmacy.employees.includes( this ) ) ) {
        return ( false );
    }

    return ( true );
  }

}