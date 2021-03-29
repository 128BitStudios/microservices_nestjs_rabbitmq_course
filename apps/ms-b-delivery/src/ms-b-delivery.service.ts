import { Injectable } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()
export class MsBDeliveryService {
  getHello(): string {
    return 'Hello World!';
  }
}
