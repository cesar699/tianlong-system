import { WebSocketGateway, WebSocketServer, OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MoneyService } from './money.service';

@WebSocketGateway({ namespace: '/money' })
export class MoneyGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;
  constructor(private readonly moneyService: MoneyService) {}

  afterInit() {
    this.pushUpdates();
  }

  async pushUpdates() {
    const data = await this.moneyService.getOpportunities();
    this.server.emit('update', data);
  }
}