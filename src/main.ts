import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'protos/hero.proto'),
      url: 'localhost:50051',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}/docs`);
}
bootstrap();
