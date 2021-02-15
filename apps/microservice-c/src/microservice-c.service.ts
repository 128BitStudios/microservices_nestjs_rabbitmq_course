import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceCService {
  getHello(): string {
    return 'Hello World!';
  }
}
