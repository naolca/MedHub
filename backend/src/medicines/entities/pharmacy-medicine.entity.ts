// pharmacy-medicine.entity.ts
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Medicine } from './medicine.entity';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';

@Entity()
export class PharmacyMedicine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brandname:string
  
  @Column()
  quantity: number;

  @ManyToOne(() => Medicine, medicine => medicine.pharmacyMedicines)
  medicine: Medicine;

  @ManyToOne(() => Pharmacy, pharmacy => pharmacy.pharmacyMedicines)
  pharmacy: Pharmacy;
}