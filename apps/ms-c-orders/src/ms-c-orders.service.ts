import { Injectable } from '@nestjs/common';

@Injectable()
export class MsCOrdersService {
  getHello(): string {
    return 'Hello World!';
  }
}
