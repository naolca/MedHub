import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AdministratorsController } from './administrators.controller';
import { AdministratorsService } from './administrators.service';
import { Administrator } from './entities/administrator.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'MedHub',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([ Administrator ]),
  ],
  controllers: [AdministratorsController],
  providers: [
    AdministratorsService,
    JwtStrategy,
  ],
  exports: [
  ],
})
export class AdministratorsModule {}