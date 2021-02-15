import { Module } from '@nestjs/common';
import { MicroserviceAController } from './microservice-a.controller';
import { MicroserviceAService } from './microservice-a.service';

@Module({
  imports: [],
  controllers: [MicroserviceAController],
  providers: [MicroserviceAService],
})
export class MicroserviceAModule {}
