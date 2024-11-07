import { Test, TestingModule } from '@nestjs/testing';
import { ConfessionsController } from './confessions.controller';
import { ConfessionsService } from './confessions.service';

describe('ConfessionsController', () => {
  let controller: ConfessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfessionsController],
      providers: [ConfessionsService],
    }).compile();

    controller = module.get<ConfessionsController>(ConfessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
