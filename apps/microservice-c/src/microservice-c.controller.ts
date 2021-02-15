import { Controller, Get } from '@nestjs/common';
import { MicroserviceCService } from './microservice-c.service';

@Controller()
export class MicroserviceCController {
  constructor(private readonly microserviceCService: MicroserviceCService) {}

  @Get()
  getHello(): string {
    return this.microserviceCService.getHello();
  }
}
