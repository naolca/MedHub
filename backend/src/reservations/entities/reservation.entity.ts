import { Medicine } from 'src/medicines/entities/medicine.entity';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class Reservation  {
  @PrimaryGeneratedColumn()
  reservationId: number;

  @ManyToOne(() => Pharmacy, pharmacy => pharmacy.reservations, {
    cascade: true
  })
  pharmacy: Pharmacy;

  @ManyToOne(() => Medicine, medicine => medicine.reservations, {
    cascade: true
  })
  medicine: Medicine;

  @Column()
  phoneNumber: string;

  addMedicine(medicine: Medicine) {
    this.medicine = medicine;
  }

  addPharmacy(pharmacy: Pharmacy) {
    this.pharmacy = pharmacy;
  }
}
