import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('reservations')
export class ReservationEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  medicineId: string;

  @Column()
  pharmacyId: string;

  @Column()
  phoneNumber: string;
}
