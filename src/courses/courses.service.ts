import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
export interface Course {
  id: number;
  title: string;
  level: string;
  duration: string;
}
@Injectable()

export class CoursesService {


    private courses:Course[]= [] //in memory storage like to simulate database
    private courseId:number = 1; //auto-increment id

       //public methods to manipulate private variables like concept of encapsulation

         //find all cousres like await collection.find(), this returns array of objects;   
       findAll(): Course[] { // Return type is Course[]; ensures the method returns an array of Course objects matching the interface

         return this.courses
       }
           //find single cousre by id like await collection.findBy(id)
       findOne(id:number):Course{
         const course = this.courses.find(c=>c.id===id)

         if(!course){
              throw new NotFoundException(`Course with ID ${id} not found`);
         }
         return course;
       }

       //create new course here like ,await collection(course).create({title,level,duration}), this will create object of course

       create(dto:CreateCourseDto){ /* this part is just like req.body will be
         assigned for dto then validated with CreateCourseDto 
         or check are they match that type*/
          const newCourse:Course = {id:this.courseId++,...dto} /*big point here the spread operator make things mutable 
          and just spreed out the cours object propertis and make them to be parts of the single object with  the new created propety like the id*/

          this.courses.push(newCourse);
                   return newCourse;
       }
}
