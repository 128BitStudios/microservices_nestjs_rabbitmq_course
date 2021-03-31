import { NestFactory } from '@nestjs/core';
import { MsBDeliveryModule } from './ms-b-delivery.module';

async function bootstrap() {
  const app = await NestFactory.create(MsBDeliveryModule, {});
  await app.listen((3002));
}

bootstrap();
