import { Module } from '@nestjs/common';
import { MicroserviceBController } from './microservice-b.controller';
import { MicroserviceBService } from './microservice-b.service';

@Module({
  imports: [],
  controllers: [MicroserviceBController],
  providers: [MicroserviceBService],
})
export class MicroserviceBModule {}
