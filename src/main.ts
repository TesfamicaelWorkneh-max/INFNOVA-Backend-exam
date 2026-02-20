import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Enable global validation for DTOs not for @param or @query just for @body this is like middleware in node
   app.use(express.json()) this will parse the json(string) comming from the user  in to object type then make usable for the controller like req.body */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // remove extra unknown properties
      forbidNonWhitelisted: true,
      transform: true,            // automatically transform types (like string -> number)
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Courses API')
    .setDescription('API for INFNOVA Backend Internship Challenge')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running on http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`Swagger docs available at http://localhost:${process.env.PORT ?? 3000}/docs`);
}
bootstrap();
