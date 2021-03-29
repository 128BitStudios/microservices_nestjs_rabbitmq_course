import { NestFactory } from '@nestjs/core';
import { MsAStockModule } from './ms-a-stock.module';

async function bootstrap() {
  const app = await NestFactory.create(MsAStockModule, {});
  await app.listen((3001));
}

bootstrap();
