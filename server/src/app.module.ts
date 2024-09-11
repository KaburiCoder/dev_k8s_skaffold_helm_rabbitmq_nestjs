import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'RMQ', // 서비스 이름
    //     transport: Transport.RMQ, // RabbitMQ를 사용하는 transport 설정
    //     options: {
    //       urls: ['amqp://user:1234@rabbitmq.local:5672'], // RabbitMQ 연결 URL
    //       queue: 'my_queue', // 사용할 큐 이름
    //       queueOptions: {
    //         durable: false, // 큐의 내구성 여부 (false면 서버 재시작 시 큐가 삭제됨)
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
