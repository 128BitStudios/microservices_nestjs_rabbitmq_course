import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MsCOrdersController } from './ms-c-orders.controller';
import { databaseProviders } from './ms-c-orders.database.provider';
import { MsCOrdersService } from './ms-c-orders.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'orders',
          type: 'topic',
        },
      ],
      uri: 'amqp://localhost:5672',
    }),
    MsCOrdersModule,
  ],
  controllers: [MsCOrdersController],
  providers: [
    MsCOrdersService,
    ...databaseProviders,
  ],
})
export class MsCOrdersModule { }
