import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  pharmacyId: number;
  @Column()
  pharmaTinNum:number
  @Column()
  branchNum:number
  @Column()
  pharmacyName: string;
  @Column()
  lat: number;
  @Column()
  lng: number;

  // Add other columns as needed
}
