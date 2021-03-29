import { Module } from '@nestjs/common';
import { MsCOrdersController } from './ms-c-orders.controller';
import { MsCOrdersService } from './ms-c-orders.service';

@Module({
  imports: [],
  controllers: [MsCOrdersController],
  providers: [MsCOrdersService],
})
export class MsCOrdersModule {}
