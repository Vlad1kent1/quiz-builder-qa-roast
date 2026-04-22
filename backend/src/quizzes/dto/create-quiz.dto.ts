import { IsString, IsArray, IsObject, IsOptional, IsEnum, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
  @IsString()
  text: string;

  @IsEnum(['boolean', 'input', 'checkbox'])
  type: 'boolean' | 'input' | 'checkbox';

  @IsOptional()
  @IsArray()
  answers?: string[];
}

export class CreateQuizDto {
  @IsString()
  title: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}
