import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Stock } from './interfaces/stock.interface';

@Injectable()
export class MsAStockService {
  constructor(
    @Inject('STOCK_MODEL') private stockModel: Model<Stock>,
  ) { }

  @RabbitSubscribe({
    exchange: 'stock',
    routingKey: 'stock-route',
    queue: 'stock-queue',
  })

  public async pubSubHandler(msg: any) {
    switch (msg.type) {
      case 'create_stock':
        this.createStock(msg.data);
        break;
      default:
      // none for now
    }

    console.log(`Received message: ${JSON.stringify(msg)}`);
  }

  public async createStock(data) {
    return await new this.stockModel(data).save();
  }
}
