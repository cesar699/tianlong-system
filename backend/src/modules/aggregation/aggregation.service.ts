import { Injectable, Logger, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cache } from 'cache-manager';
import { ContentItem } from './content.schema';
import { WeatherPlugin } from './plugins/weather.plugin';

@Injectable()
export class AggregationService {
  private readonly logger = new Logger(AggregationService.name);
  private plugins = [ new WeatherPlugin() ];

  constructor(
    @InjectModel('ContentItem') private contentModel: Model<ContentItem>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAll(): Promise<ContentItem[]> {
    const cached = await this.cacheManager.get<ContentItem[]>('content_all');
    if (cached) return cached;
    const items = await this.contentModel.find().sort('-publishDate').lean().exec();
    await this.cacheManager.set('content_all', items);
    return items;
  }

  async search(keyword: string): Promise<ContentItem[]> {
    // Stub: full-text search integration to Elasticsearch can go here
    return this.getAll().then(list => list.filter(item =>
      item.title.includes(keyword) || item.summary.includes(keyword)));
  }

  @Cron(process.env.AGG_CRON || '*/5 * * * *')
  async refresh() {
    this.logger.log('Refreshing content aggregation...');
    let allItems = [];
    for (const plugin of this.plugins) {
      try {
        const data = await plugin.fetch();
        allItems = allItems.concat(data);
      } catch (err) {
        this.logger.error(`Plugin ${plugin.category} fetch error`, err);
      }
    }
    await this.contentModel.deleteMany({});
    await this.contentModel.insertMany(allItems);
    await this.cacheManager.del('content_all');
    this.logger.log('Refresh complete.');
  }
}
