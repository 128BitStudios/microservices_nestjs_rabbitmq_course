import { Module } from '@nestjs/common';
import { MsAStockController } from './ms-a-stock.controller';
import { MsAStockService } from './ms-a-stock.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { databaseProviders } from './ms-a-stock.database.provider';
import { modelProviders } from './ms-a-stock.model.provider';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'stock',
          type: 'topic',
        },
      ],
      uri: 'amqp://localhost:5672',
    }),
    MsAStockModule,
  ],
  controllers: [MsAStockController],
  providers: [
    MsAStockService,
    ...databaseProviders,
    ...modelProviders,
  ],
})
export class MsAStockModule { }
