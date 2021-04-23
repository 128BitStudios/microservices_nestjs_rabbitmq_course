import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {
    //
  }

  @Get('check-stock')
  async checkStock() {
    await this.appService.checkStock('jaffa-cake', 1);
  }

  @Get('order')
  async createOrder() {
    await this.appService.createOrder('jaffa-cake-monster', 'jaffa-cake', 1);
  }

  @Get('check-delivery')
  async checkDelivery() {
    await this.appService.checkDelivery('jaffa-cake-monster');
  }

  @Get('create-stock')
  async createStock() {
    await this.appService.createStock(uuid(), 5, 'Jaffa Cake');
  }
}
