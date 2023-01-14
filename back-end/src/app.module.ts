import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MedicinesModule } from './medicines/medicines.module';

@Module({
  imports: [TasksModule, MedicinesModule],
})
export class AppModule {}
