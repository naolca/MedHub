import { Module } from '@nestjs/common';
import { MedicinesModule } from './medicines/medicines.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MedicinesModule, DatabaseModule, AuthModule],
})
export class AppModule {}
