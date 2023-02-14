import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationModule } from './reservation/reservation.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
  
  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'medhub',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        }),
        
        ReservationModule,
        
        PharmaciesModule],
        
        
        
  
})
export class AppModule {}
