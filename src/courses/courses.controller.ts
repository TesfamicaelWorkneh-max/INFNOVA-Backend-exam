import { Controller,Get,Post,Body,Param,ParseIntPipe,HttpCode,HttpStatus, } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
@Controller('courses') //this is the base for API call like GET/courses every course related APIs must start with courses unless 404 status will be happen
export class CoursesController {
    /*this will create instance of Service and assign it for coursesService like  ,const coursesService = new CoursesService
     then using this instance variable we can access(call) the public methods which are in side the service like findAll,create,findOne
     so now we will defined out API endpoints then those public methods will handle our query
    */ 
   constructor(private readonly coursesService:CoursesService){}
// GET /courses
  @Get() //decorator like router.get("/",findAll)
  findAll() {
    return this.coursesService.findAll();
  }
  @Get(':id') //decorator like router.get("/:id",findOne)
  findOne(@Param('id', ParseIntPipe) id: number) { /*@param-> like req.params in node 
     ParseIntPipe->used for just to change the string in to an integer then the result will be assigned for id*/
    return this.coursesService.findOne(id); /*here is the hundler which is declared in our service file so as i told befor we can call the handlers methods using the instance variable(coursesService)*/
  }

  // POST /courses
  @Post()  // router.post("/",create)
  @HttpCode(HttpStatus.CREATED) // this like, return res.status(201) in node which mean something is created in our database 
  //@body is like req.body(node) then after that the values will be sent for dto then will validated againest  CreateCourseDto like are they looks the DTO 
  create(@Body() dto: CreateCourseDto) {
    return this.coursesService.create(dto); //call service handler with id 
  }
}

