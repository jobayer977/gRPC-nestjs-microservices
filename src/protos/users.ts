/* eslint-disable */

export const protobufPackage = 'users';

export interface GetUserRequest {
  email: string;
}

export interface GetUserResponse {
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface CreateUserResponse {
  name: string;
  email: string;
}

export interface UsersService {
  GetUser(request: GetUserRequest): Promise<GetUserResponse>;
  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
}
