import { Controller, Get } from '@nestjs/common';
import { MsCOrdersService } from './ms-c-orders.service';

@Controller()
export class MsCOrdersController {
  constructor(private readonly msCOrdersService: MsCOrdersService) {}

  @Get()
  getHello(): string {
    return this.msCOrdersService.getHello();
  }
}
