
import { Controller, Post, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('generate')
  generate(@Query('topic') topic: string) {
    return this.videoService.generate(topic);
  }

  @Get('list')
  list() {
    return this.videoService.getList();
  }
}
