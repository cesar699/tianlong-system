
import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('top')
  getTopNews() {
    return this.newsService.getTopNews();
  }

  @Get('category')
  getNewsByCategory(@Query('category') category: string) {
    return this.newsService.getByCategory(category);
  }

  @Get('sources')
  getSources() {
    return this.newsService.getSources();
  }
}
