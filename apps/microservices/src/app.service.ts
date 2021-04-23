import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly amqpConnection: AmqpConnection,
  ) {
    //
  }

  async checkStock(itemName, quantity) {
    await this.amqpConnection.publish('stock', 'stock-route', { data: { itemName, quantity } });
    console.log('msg published', 'stock', 'stock-route', { data: { itemName, quantity } });
  }

  async createOrder(customerName, itemName, quantity) {
    await this.amqpConnection.publish('orders', 'orders-route', { data: { customerName, itemName, quantity } });
    console.log('msg published', 'orders', 'orders-route', { data: { customerName, itemName, quantity } });
  }

  async checkDelivery(customerName) {
    await this.amqpConnection.publish('delivery', 'delivery-route', { data: { customerName } });
    console.log('msg published', 'delivery', 'delivery-route', { data: { customerName } });
  }

  async createStock(stockId, quantity, name) {
    await this.amqpConnection.publish('stock', 'stock-route', { type: 'create_stock', data: { stockId, quantity, name } }, {});
    console.log('msg published', 'stock', 'stock-route', { type: 'create_stock', data: { stockId, quantity, name } });
  }
}
