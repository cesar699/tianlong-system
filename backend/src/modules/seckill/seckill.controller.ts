
import { Controller, Post, Get, Query } from '@nestjs/common';
import { SeckillService } from './seckill.service';

@Controller('seckill')
export class SeckillController {
  constructor(private readonly service: SeckillService) {}

  @Post('start')
  start(@Query('platform') platform: string, @Query('sku') sku: string, @Query('userId') userId: string) {
    return this.service.startSeckill(platform, sku, { userId });
  }

  @Get('health')
  health() {
    return this.service.health();
  }
}
