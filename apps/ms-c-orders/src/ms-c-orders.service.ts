import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MsCOrdersService {
  @RabbitSubscribe({
    exchange: 'orders',
    routingKey: 'orders-route',
    queue: 'orders-queue',
  })

  public async pubSubHandler(msg: {}) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
