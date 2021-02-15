import { Controller, Get } from '@nestjs/common';
import { MicroserviceBService } from './microservice-b.service';

@Controller()
export class MicroserviceBController {
  constructor(private readonly microserviceBService: MicroserviceBService) {}

  @Get()
  getHello(): string {
    return this.microserviceBService.getHello();
  }
}
