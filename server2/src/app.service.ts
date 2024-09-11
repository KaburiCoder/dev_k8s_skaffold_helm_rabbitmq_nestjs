import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('RMQ') private readonly client: ClientProxy) { }

  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(): Observable<{ success: boolean; response?: any; error?: string }> {
    const message = { text: 'Hello, RabbitMQ!' };
    return this.client.send('my_queue', message).pipe(
      tap(() => console.log('send')),
      map(response => ({ success: true, response })),
      catchError(error => {
        console.error('Error:', error);
        return of({ success: false, error: error.message });
      })
    );
  }
}
