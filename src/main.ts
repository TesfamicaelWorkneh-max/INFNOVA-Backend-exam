import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Enable global validation for DTOs not for @param or @query just for @body this is like middleware in node
   app.use(express.json()) this will parse the json(string) comming from the user  in to object type then make usable for the controller like req.body */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // remove extra unknown properties
      forbidNonWhitelisted: true, // throw error if extra props are sent
      transform: true,            // automatically transform types (like string -> number)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
    console.log(`Server is running on http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
