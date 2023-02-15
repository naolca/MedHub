import { OneToMany, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Employee } from 'src/auth/entities/employee.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Medicine } from 'src/medicines/entities/medicine.entity';

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  pharmacyId: number;

  @Column()
  pharmacyTinNo: number;

  @Column()
  branchNum: number;

  @Column()
  pharmacyName: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  // pharmacies can have many employees
  @OneToMany(() => Employee, employee => employee.pharmacy)
  employees: Employee[];

  // pharmacies can have many reservations issued towards them
  @OneToMany(() => Employee, employee => employee.pharmacy)
  reservations: Reservation[];

  @ManyToMany(() => Medicine, medicine => medicine.pharmacies)
  @JoinTable()
  medicines: Medicine[];

  // Add other columns as needed
}
