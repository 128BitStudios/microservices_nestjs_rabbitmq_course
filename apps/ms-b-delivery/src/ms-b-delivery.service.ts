import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MsBDeliveryService {
  @RabbitSubscribe({
    exchange: 'delivery',
    routingKey: 'delivery-route',
    queue: 'delivery-queue',
  })

  public async pubSubHandler(msg: {}) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
