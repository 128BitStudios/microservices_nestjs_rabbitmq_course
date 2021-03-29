import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MsBDeliveryModule } from './ms-b-delivery.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MsBDeliveryModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'mailbox',
      queueOptions: {
        durable: false
      },
    },
    logger: true
  });
  app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
