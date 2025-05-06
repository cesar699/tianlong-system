
import { Controller, Get, Query } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('login')
  login() {
    return this.musicService.autoLogin();
  }

  @Get('history')
  history(@Query('userId') userId: number) {
    return this.musicService.getPlayHistory(userId);
  }

  @Get('recommend')
  recommend() {
    return this.musicService.getRecommendations();
  }
}
