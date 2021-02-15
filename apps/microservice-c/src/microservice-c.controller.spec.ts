import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceCController } from './microservice-c.controller';
import { MicroserviceCService } from './microservice-c.service';

describe('MicroserviceCController', () => {
  let microserviceCController: MicroserviceCController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceCController],
      providers: [MicroserviceCService],
    }).compile();

    microserviceCController = app.get<MicroserviceCController>(MicroserviceCController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceCController.getHello()).toBe('Hello World!');
    });
  });
});
