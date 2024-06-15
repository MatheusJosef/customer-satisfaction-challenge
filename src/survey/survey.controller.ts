import {
  Controller,
  Post,
  Put,
  Body,
  Param,
  Get,
  Query,
  Res,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto, UpdateSurveyDto, FillSurveyDto } from './dto';

@Controller('surveys')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  createSurvey(@Body() data: CreateSurveyDto) {
    return this.surveyService.createSurvey(data);
  }

  @Put(':id')
  updateSurvey(@Param('id') id: number, @Body() data: UpdateSurveyDto) {
    return this.surveyService.updateSurvey(id, data);
  }

  @Post('fill')
  fillSurvey(@Body() data: FillSurveyDto) {
    return this.surveyService.fillSurvey(data);
  }

  @Get('fills')
  listFills(
    @Query('audience') audience: string,
    @Query('order') order: 'ASC' | 'DESC',
  ) {
    return this.surveyService.listFillsByAudience(audience, order);
  }

  @Get('export/csv')
  async exportFillsToCSV(@Res() res: any) {
    const csv = await this.surveyService.exportFillsToCSV();
    res.header('Content-Type', 'text/csv');
    res.attachment('fills.csv');
    return res.send(csv);
  }
}
