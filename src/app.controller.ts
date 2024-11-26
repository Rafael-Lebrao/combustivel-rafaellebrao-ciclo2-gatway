import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices'
import { CriarCombustivelDto } from './dtos/criar-combustivel-dto';

@Controller()
export class AppController {

  private logger = new Logger(AppController.name)
  private clienteAdminBackend: ClientProxy
  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
        queue: 'admin-backend'
      }
    })
  }

  @Post('combustivel')
  @UsePipes(ValidationPipe)
  async criarcombustivel(@Body() criarCombustivelDto: CriarCombustivelDto) {
    return await this.clienteAdminBackend.emit('criar-combustivel', criarCombustivelDto)
  }


}