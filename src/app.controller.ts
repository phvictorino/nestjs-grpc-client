import { Controller, Get, OnModuleInit, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { microserviceOptions } from './grpc.options';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post()
  async login(@Body() user: any): Promise<any> {
    this.logger.log(user);
    return await this.grpcService.login(user).toPromise();
  }
}
