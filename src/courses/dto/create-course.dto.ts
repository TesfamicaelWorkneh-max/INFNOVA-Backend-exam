import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ example: 'Intro to HTML', description: 'Title of the course' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Beginner', description: 'Level of the course' })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ example: '4 weeks', description: 'Duration of the course' })
  @IsString()
  @IsNotEmpty()
  duration: string;
}
