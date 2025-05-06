import { Controller, Get } from '@nestjs/common';
import { Ip-toolsService } from './ip-tools.service';

@Controller('ip-tools')
export class Ip-toolsController {
  constructor(private readonly service: Ip-toolsService) {}

  @Get()
  getInfo() {
    return { message: 'ip-tools module placeholder' };
  }
}