import { CreateUserRequest, GetUserRequest } from './protos/users';

import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('UsersService', 'GetUser')
  findOne(data: GetUserRequest) {
    return data;
  }

  @GrpcMethod('UsersService', 'CreateUser')
  create(data: CreateUserRequest) {
    return data;
  }
}
