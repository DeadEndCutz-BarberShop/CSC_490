import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/User.entity';
import { Service } from './service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, User])],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
