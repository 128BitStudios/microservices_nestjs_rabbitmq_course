import { Controller, Get } from '@nestjs/common';
import { MicroserviceAService } from './microservice-a.service';

@Controller()
export class MicroserviceAController {
  constructor(private readonly microserviceAService: MicroserviceAService) {}

  @Get()
  getHello(): string {
    return this.microserviceAService.getHello();
  }
}
