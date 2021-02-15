import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceAService {
  getHello(): string {
    return 'Hello World!';
  }
}
