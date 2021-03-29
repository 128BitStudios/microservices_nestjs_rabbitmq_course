import { Controller } from '@nestjs/common';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Controller()
export class MsBDeliveryController {
  constructor(private readonly msBDeliveryService: MsBDeliveryService) { }
}
