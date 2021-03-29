import { Injectable } from '@nestjs/common';

@Injectable()
export class MsAStockService {
  getHello(): string {
    return 'Hello World!';
  }
}
