import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceBController } from './microservice-b.controller';
import { MicroserviceBService } from './microservice-b.service';

describe('MicroserviceBController', () => {
  let microserviceBController: MicroserviceBController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceBController],
      providers: [MicroserviceBService],
    }).compile();

    microserviceBController = app.get<MicroserviceBController>(MicroserviceBController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceBController.getHello()).toBe('Hello World!');
    });
  });
});
