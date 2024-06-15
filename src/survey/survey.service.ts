import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { Fill } from './fill.entity';
import { CreateSurveyDto, FillSurveyDto, UpdateSurveyDto } from './dto';
import { Parser } from 'json2csv';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
    @InjectRepository(Fill)
    private fillRepository: Repository<Fill>,
  ) {}

  async createSurvey(data: CreateSurveyDto): Promise<Survey> {
    const survey = this.surveyRepository.create(data);
    return this.surveyRepository.save(survey);
  }

  async updateSurvey(id: number, data: UpdateSurveyDto): Promise<Survey> {
    await this.surveyRepository.update(id, data);
    return this.surveyRepository.findOne({ where: { id: id } });
  }

  async fillSurvey(data: FillSurveyDto): Promise<Fill> {
    const fill = this.fillRepository.create(data);
    return this.fillRepository.save(fill);
  }

  async listFillsByAudience(
    audience: string,
    order: 'ASC' | 'DESC',
  ): Promise<Fill[]> {
    return this.fillRepository.find({
      where: { survey: { targetAudience: audience } },
      order: { survey: { starRating: order } },
    });
  }

  async exportFillsToCSV(): Promise<string> {
    const fills = await this.fillRepository.find({ relations: ['survey'] });
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(fills);
    return csv;
  }
}
