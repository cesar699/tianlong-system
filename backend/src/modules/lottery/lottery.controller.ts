
import { Controller, Get, Post, Query } from '@nestjs/common';
import { LotteryService } from './lottery.service';

@Controller('lottery')
export class LotteryController {
  constructor(private readonly lotteryService: LotteryService) {}

  @Get('history')
  getHistory() {
    return this.lotteryService.getHistory();
  }

  @Get('recommend')
  recommend() {
    return this.lotteryService.getRecommendation();
  }

  @Post('toggle')
  toggle(@Query('enable') enable: string) {
    const enabled = enable === 'true';
    return this.lotteryService.toggle(enabled);
  }
}
