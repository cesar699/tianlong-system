
import { Injectable } from '@nestjs/common';

@Injectable()
export class AiStrategyService {
  suggestBestTime(userHistory: any[]): string {
    // 简化模型：统计历史成功时间段，返回最多的时间段
    const hourMap = new Map<number, number>();
    for (const h of userHistory) {
      const hour = new Date(h.timestamp).getHours();
      hourMap.set(hour, (hourMap.get(hour) || 0) + 1);
    }
    const best = [...hourMap.entries()].sort((a, b) => b[1] - a[1])[0];
    return `${best[0]}:00`;
  }

  recordResult(userId: number, result: 'success' | 'fail') {
    // TODO: 存储至历史数据集进行持续学习（可接入 MongoDB）
    console.log(`[AI] Record: user ${userId} - ${result}`);
  }
}
