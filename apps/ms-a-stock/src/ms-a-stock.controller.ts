import { Controller, Get } from '@nestjs/common';
import { MsAStockService } from './ms-a-stock.service';

@Controller()
export class MsAStockController {
  constructor(private readonly msAStockService: MsAStockService) {}

  @Get()
  getHello(): string {
    return this.msAStockService.getHello();
  }
}
