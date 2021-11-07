import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port: number = +process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(`Server is running on port ${port}`, 'Bootstrap');
}
bootstrap();
