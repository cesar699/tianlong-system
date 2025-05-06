import { Injectable } from '@nestjs/common';
import { AiService } from '../ai/ai.service';

@Injectable()
export class StrategyService {
  constructor(private ai: AiService) {}

  async predict(productInfo: Record<string, any>) {
    const prompt = `我有以下商品信息：${JSON.stringify(productInfo)}，请根据历史数据，给出最优抢购策略。`;
    const advice = await this.ai.chatCompletion(prompt, { temperature: 0.2 });
    return advice;
  }
}
