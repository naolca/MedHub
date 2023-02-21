// pharmacy.entity.ts
import { OneToMany, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Unique } from 'typeorm';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Medicine } from 'src/medicines/entities/medicine.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { PharmacyMedicine } from 'src/medicines/entities/pharmacy-medicine.entity';

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()
  pharmacyTinNo:number
  
  @Column()
  pharmacyName: string;
    
  @Column()
  branchNum: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

    // pharmacies can have many employees
  @OneToMany(() => Employee, employee => employee.pharmacy, {
    eager: true
  })
  employees: Employee[];

  // pharmacies can have many reservations issued towards them
  @OneToMany(() => Reservation, reservation => reservation.pharmacy)
  reservations: Reservation[];

  @OneToMany(() => PharmacyMedicine, pharmacyMedicine => pharmacyMedicine.pharmacy, { cascade: true, eager: true })
  pharmacyMedicines: PharmacyMedicine[];
}


// import { OneToMany, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

// import { Reservation } from 'src/reservations/entities/reservation.entity';
// import { Medicine } from 'src/medicines/entities/medicine.entity';
// import { Employee } from 'src/employees/entities/employee.entity';

// @Entity()
// export class Pharmacy {
//   @PrimaryGeneratedColumn()
//   pharmacyId: number;

//   @Column()
//   pharmacyTinNo: number;

//   @Column()
//   branchNum: number;

//   @Column()
//   pharmacyName: string;

//   @Column()
//   latitude: number;

//   @Column()
//   longitude: number;

//   // pharmacies can have many employees
//   @OneToMany(() => Employee, employee => employee.pharmacy)
//   employees: Employee[];

//   // pharmacies can have many reservations issued towards them
//   @OneToMany(() => Reservation, reservation => reservation.pharmacy)
//   reservations: Reservation[];

//   @ManyToMany(() => Medicine, medicine => medicine.pharmacies)
//   @JoinTable()
//   medicines: Medicine[];

//   // Add other columns as needed
// }
