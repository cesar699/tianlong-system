
import { Injectable, Logger } from '@nestjs/common';
import { Queue, Worker, Job } from 'bullmq';
import { JdAdapter } from './adapters/jd.adapter';
import { TaobaoAdapter } from './adapters/taobao.adapter';
import { PinduoduoAdapter } from './adapters/pinduoduo.adapter';
import { SuningAdapter } from './adapters/suning.adapter';
import * as CircuitBreaker from 'opossum';

const adapterMap = {
  jd: JdAdapter,
  taobao: TaobaoAdapter,
  pinduoduo: PinduoduoAdapter,
  suning: SuningAdapter,
};

@Injectable()
export class SeckillService {
  private readonly logger = new Logger(SeckillService.name);
  private queue = new Queue('seckill-queue', {
    defaultJobOptions: {
      attempts: 5,
      backoff: { type: 'exponential', delay: 1000 },
      removeOnComplete: true,
      removeOnFail: false,
    },
  });

  constructor() {
    new Worker('seckill-queue', async (job: Job) => {
      const { platform, sku, account } = job.data as any;
      const AdapterClass = adapterMap[platform];
      const adapter = new AdapterClass();
      // 使用电路断路器封装下单调用
      const breaker = new CircuitBreaker(
        () => this.executeOrder(adapter, sku),
        { timeout: 5000, errorThresholdPercentage: 50, resetTimeout: 30000 }
      );
      breaker.fallback(() => ({ success: false, reason: 'circuit open' }));
      const result = await breaker.fire();
      await this.log(platform, sku, account.userId, result);
    }, { concurrency: 10 });
  }

  async startSeckill(platform: string, sku: string, account: any) {
    // 入队时检查队列长度，限制最大并发
    const count = await this.queue.count();
    if (count > 100) {
      return { queued: false, reason: '队列繁忙，请稍后重试' };
    }
    await this.queue.add(`${platform}-${sku}`, { platform, sku, account });
    return { queued: true };
  }

  private async executeOrder(adapter: any, sku: string) {
    // 检查库存
    const stock = await adapter.checkStock(sku);
    if (stock > 0) {
      return adapter.placeOrder(sku);
    }
    return { success: false, reason: 'out of stock' };
  }

  private async log(platform: string, sku: string, userId: string, res: any) {
    this.logger.log(`Seckill ${platform} SKU=${sku} user=${userId} result=${JSON.stringify(res)}`);
    // TODO: 持久化到数据库或监控系统
  }

  async health() {
    // 检查 Redis 连接、队列长度
    const count = await this.queue.count();
    return { status: 'ok', queueLength: count };
  }
}
