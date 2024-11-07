import { Test, TestingModule } from '@nestjs/testing';
import { ConfessionsService } from './confessions.service';

describe('ConfessionsService', () => {
  let service: ConfessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfessionsService],
    }).compile();

    service = module.get<ConfessionsService>(ConfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
