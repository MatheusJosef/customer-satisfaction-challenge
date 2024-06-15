export class CreateSurveyDto {
  targetAudience: string;
  starRating: number;
  contactEmail: string;
}

export class UpdateSurveyDto {
  targetAudience?: string;
  starRating?: number;
  contactEmail?: string;
}

export class FillSurveyDto {
  surveyId: number;
  response: string;
}
