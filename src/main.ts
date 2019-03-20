import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
//  const app = await NestFactory.create(AppModule,new FastifyAdapter());
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  let servingPath = join(__dirname, '..', 'public/dist/public')
  app.useStaticAssets(servingPath);
  await app.listen(3000);
}
bootstrap();
