import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCourseDto {
  @ApiPropertyOptional({ example: 'Intro to CSS', description: 'Title of the course' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'Intermediate', description: 'Level of the course' })
  @IsOptional()
  @IsString()
  level?: string;

  @ApiPropertyOptional({ example: '6 weeks', description: 'Duration of the course' })
  @IsOptional()
  @IsString()
  duration?: string;
}
