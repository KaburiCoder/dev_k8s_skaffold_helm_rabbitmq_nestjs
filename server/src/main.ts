import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001, () => {
    console.log('HTTP server is running on port 3001');
  });


  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:1234@rabbitmq-headless.default.svc.cluster.local:5672'],
      queue: 'my_queue',  // 서버 1에서 사용하는 큐와 동일하게 설정
      queueOptions: {
        durable: false,  // 내구성 설정
      },
    },
  });
  await microservice.listen();
}
bootstrap();
