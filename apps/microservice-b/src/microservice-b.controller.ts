import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext, MessagePattern } from '@nestjs/microservices';
import { MicroserviceBService } from './microservice-b.service';

@Controller()
export class MicroserviceBController {
  constructor(
    private readonly microserviceBService: MicroserviceBService,
  ) {
    //
  }

  @Get()
  getHello(): string {
    return this.microserviceBService.getHello();
  }

  @EventPattern('ANIMALS_CREATED')
  getNotifications(@Payload() data: string[], @Ctx() context: RmqContext) {
    console.log(`Data: ${JSON.stringify(data)}`);
    console.log(`Pattern: ${context.getPattern()}`);
  }
}
