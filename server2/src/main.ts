import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('HTTP server is running on port 3002');

  await app.listen(3002);
}
bootstrap();
