import { Test, TestingModule } from '@nestjs/testing';
import { SurveyService } from './survey.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Survey } from './survey.entity';
import { Fill } from './fill.entity';

describe('SurveyService', () => {
  let service: SurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurveyService,
        {
          provide: getRepositoryToken(Survey),
          useValue: {},
        },
        {
          provide: getRepositoryToken(Fill),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<SurveyService>(SurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
