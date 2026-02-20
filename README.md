Course API — INFNOVA Backend Challenge

Overview:

This project is a simple Course Management API built with NestJS for the INFNOVA Backend Internship challenge.

The API supports full CRUD operations and includes:

 1,Create, Read, Update, Delete courses

 2, DTO validation using class-validator

 3, Global validation pipe

 4, In-memory data storage (no database)

 5, Interactive API documentation with Swagger

Getting Started:

1,install dependencies

    npm install

2,Run the application

    npm run start:dev
  the srerver will start at :http://localhost:3000

3,API Documentation (Swagger):

   http://localhost:3000/docs

   Swagger allows to:

      View all endpoints

      See request/response schemas

      Test endpoints directly from the browser

4,Available Endpoints:

  GET api/v1/courses

Description: Retrieve all courses

  GET api/v1/courses/:id

Description: Retrieve a single course by ID

  POST /courses

Description: Create a new course

Request Body Example:

{
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}

 PUT api/v1/courses/:id

Description: Update an existing course

Request Body Example (partial allowed):

   {
      "title": "Intro to CSS",
       "level": "Intermediate"
   }

 DELETE api/v1/courses/:id

Description: Delete a course by ID

  4,Technical Details:

    Framework: NestJS

    Language: TypeScript

    Validation: class-validator

    Documentation: Swagger

    Data Storage: In-memory array


    Notes:

Course IDs are auto-incremented.

Data resets when the server restarts (no database used).

CreateCourseDto requires all fields.

UpdateCourseDto allows partial updates.