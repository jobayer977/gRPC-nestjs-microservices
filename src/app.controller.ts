import { Controller, Get } from '@nestjs/common';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
