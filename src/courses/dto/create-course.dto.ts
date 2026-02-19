import {isNotEmpty,IsString} from "class-validator";

export class CreateCourseDto{
     @IsString()
     @isNotEmpty()
     title:string;
     @IsString()
     @isNotEmpty()
     level:string;
     @IsString()
     @isNotEmpty()
     duration:string;
}