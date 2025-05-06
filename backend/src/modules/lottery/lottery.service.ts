
import { Injectable } from '@nestjs/common';

@Injectable()
export class LotteryService {
  private enabled = true;

  toggle(enabled: boolean) {
    this.enabled = enabled;
    return { enabled: this.enabled };
  }

  getHistory() {
    return [
      { date: '2025-04-30', numbers: [3, 8, 15, 22, 27, 33] },
      { date: '2025-05-01', numbers: [2, 7, 14, 19, 23, 30] },
    ];
  }

  getRecommendation() {
    if (!this.enabled) {
      return { status: 'disabled', message: '推荐功能已关闭' };
    }
    return {
      recommended: [5, 12, 18, 21, 29, 31],
      strategy: '大数据冷热分析'
    };
  }
}
