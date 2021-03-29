import { Module } from '@nestjs/common';
import { MsBDeliveryController } from './ms-b-delivery.controller';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Module({
  imports: [],
  controllers: [MsBDeliveryController],
  providers: [MsBDeliveryService],
})
export class MsBDeliveryModule {}
