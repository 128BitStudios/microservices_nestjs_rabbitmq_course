import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { databaseProviders } from 'apps/ms-a-stock/src/ms-a-stock.database.provider';
import { MsBDeliveryController } from './ms-b-delivery.controller';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'delivery',
          type: 'topic',
        },
      ],
      uri: 'amqp://localhost:5672',
    }),
    MsBDeliveryModule,
  ],
  controllers: [MsBDeliveryController],
  providers: [
    MsBDeliveryService,
    ...databaseProviders,
  ],
})
export class MsBDeliveryModule {}
