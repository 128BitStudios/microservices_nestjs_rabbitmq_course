import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MicroserviceAModule } from './microservice-a.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MicroserviceAModule, {
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
