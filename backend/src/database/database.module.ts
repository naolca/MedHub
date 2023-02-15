import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from 'src/auth/entities/administrator.entity';
import { Employee } from 'src/auth/entities/employee.entity';
import { User } from 'src/auth/entities/user.entity';
import { Medicine } from 'src/medicines/entities/medicine.entity';
import { Pharmacy } from 'src/pharmacies/entities/pharmacy.entity';
import { Privilage } from 'src/privilages/entities/privilage.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'medhub',
      entities: [User, Administrator, Employee, Medicine, Pharmacy, Privilage, Reservation],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
