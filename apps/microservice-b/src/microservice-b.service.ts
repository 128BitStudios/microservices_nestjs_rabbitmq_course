import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceBService {
  getHello(): string {
    return 'Hello World!';
  }
}
