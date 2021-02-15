import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceAController } from './microservice-a.controller';
import { MicroserviceAService } from './microservice-a.service';

describe('MicroserviceAController', () => {
  let microserviceAController: MicroserviceAController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceAController],
      providers: [MicroserviceAService],
    }).compile();

    microserviceAController = app.get<MicroserviceAController>(MicroserviceAController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceAController.getHello()).toBe('Hello World!');
    });
  });
});
