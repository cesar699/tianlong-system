
import { Controller, Post, Get, Query } from '@nestjs/common';
import { NovelService } from './novel.service';

@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post('generate')
  generate(@Query('title') title: string) {
    return this.novelService.generate(title);
  }

  @Get('list')
  list() {
    return this.novelService.getList();
  }
}
