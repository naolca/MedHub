import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from 'src/administrators/entities/administrator.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Medicine } from 'src/medicines/entities/medicine.entity';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '10.6.250.56',
      port: 5432,
      username: 'postgres',
      password: '7878',
      database: 'medhub',
      entities: [ Employee, Medicine, Pharmacy, Reservation, Administrator ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}