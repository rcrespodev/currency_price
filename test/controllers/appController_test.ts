import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/api/controlles/app.controller';
import { AppService } from '../../src/api/services/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.root(undefined)).toStrictEqual({"titulo": "bitcoin price"});
    });
  });
});
