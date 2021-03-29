import { Controller } from '@nestjs/common';
import { MsAStockService } from './ms-a-stock.service';

@Controller()
export class MsAStockController {
  constructor(private readonly msAStockService: MsAStockService) {}
}
