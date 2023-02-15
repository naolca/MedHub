import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique([ "brandName" ])
export class Medicine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    genericName: string;

    @Column()
    brandName: string;

    @Column()
    batchNumber: string;

    @Column()
    ammount: number;

    @Column()
    receivingAddress: string;

    @Column()
    storageConditions: string;

    @Column()
    expiryDate: string;
}