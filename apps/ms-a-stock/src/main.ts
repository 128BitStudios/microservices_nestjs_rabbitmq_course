import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MsAStockModule } from './ms-a-stock.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MsAStockModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'mailbox',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
