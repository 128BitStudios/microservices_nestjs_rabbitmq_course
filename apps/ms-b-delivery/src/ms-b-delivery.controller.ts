import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext, MessagePattern } from '@nestjs/microservices';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Controller()
export class MsBDeliveryController {
  constructor(
    private readonly msBDeliveryService: MsBDeliveryService,
  ) {
    //
  }

  @Get()
  getHello(): string {
    return this.msBDeliveryService.getHello();
  }

  @EventPattern('ANIMALS_CREATED')
  getNotifications(@Payload() data: string[], @Ctx() context: RmqContext) {
    console.log(`Data: ${JSON.stringify(data)}`);
    console.log(`Pattern: ${context.getPattern()}`);
  }
}
