import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    console.log("gethello");
    
    return this.appService.sendMessage();
  }

  @MessagePattern("my_queue")
  async handleMessage(data: any) {
    console.log('Received message:', data);
    // 받은 메시지 처리 로직
    return { success: true };
  }
}
