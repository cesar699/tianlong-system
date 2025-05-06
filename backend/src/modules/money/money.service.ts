import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MoneyOpportunity } from './money.schema';

@Injectable()
export class MoneyService {
  private readonly logger = new Logger(MoneyService.name);
  private enabled = true;

  constructor(
    @InjectModel('MoneyOpportunity') private oppModel: Model<MoneyOpportunity>,
  ) {}

  toggle(enabled: boolean) {
    this.enabled = enabled;
    return { enabled };
  }

  async getOpportunities() {
    if (!this.enabled) {
      return { status: 'disabled', message: '网赚功能已关闭' };
    }
    return this.oppModel.find().sort('-createdAt').lean().exec();
  }

  async getFilteredList() {
    const list = await this.getOpportunities();
    if (Array.isArray(list)) {
      return list.filter(item =>
        !item.title.includes('违法') && !item.description.includes('非法'),
      );
    }
    return list;
  }

  @Cron(process.env.MONEY_REFRESH_CRON || '0 */1 * * *')
  async refreshOpportunities() {
    this.logger.log('Refreshing money opportunities...');
    // 示例数据替换为实际抓取逻辑
    const data = [
      { title: '示例1', description: '自动脚本生成示例', risk: '低', estimatedProfit: 100, timeCost: 1, successRate: 0.8 },
      { title: '示例2', description: '示例2说明', risk: '中', estimatedProfit: 50, timeCost: 2, successRate: 0.5 },
    ];
    await this.oppModel.deleteMany({});
    await this.oppModel.insertMany(data);
    this.logger.log('Refresh complete.');
  }
}