import { Module } from '@nestjs/common';
import { PrivilagesService } from './privilages.service';
import { PrivilagesController } from './privilages.controller';

@Module({
  controllers: [PrivilagesController],
  providers: [PrivilagesService]
})
export class PrivilagesModule {}
