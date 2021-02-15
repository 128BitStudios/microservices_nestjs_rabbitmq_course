import { Module } from '@nestjs/common';
import { MicroserviceCController } from './microservice-c.controller';
import { MicroserviceCService } from './microservice-c.service';

@Module({
  imports: [],
  controllers: [MicroserviceCController],
  providers: [MicroserviceCService],
})
export class MicroserviceCModule {}
