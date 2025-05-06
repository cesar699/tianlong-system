
import { Injectable } from '@nestjs/common';

@Injectable()
export class JdService {
  private queue: string[] = [];

  buyProduct(sku: string) {
    this.queue.push(sku);
    return { success: true, message: `已加入抢购队列: ${sku}` };
  }

  getStatus() {
    return {
      queue: this.queue,
      timestamp: Date.now()
    };
  }
}
