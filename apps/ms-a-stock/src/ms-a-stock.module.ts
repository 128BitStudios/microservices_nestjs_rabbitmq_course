import { Module } from '@nestjs/common';
import { MsAStockController } from './ms-a-stock.controller';
import { MsAStockService } from './ms-a-stock.service';

@Module({
  imports: [],
  controllers: [MsAStockController],
  providers: [MsAStockService],
})
export class MsAStockModule {}
