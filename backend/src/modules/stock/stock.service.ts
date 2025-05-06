
import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getHistory(symbol: string) {
    return {
      symbol,
      history: [
        { date: '2025-04-29', price: 120 },
        { date: '2025-04-30', price: 122 },
        { date: '2025-05-01', price: 121 },
      ]
    };
  }

  predict(symbol: string) {
    return {
      symbol,
      predictedPrice: 125,
      confidence: '高'
    };
  }

  indicators(symbol: string) {
    return {
      symbol,
      RSI: 48,
      MACD: 1.2,
      SMA_50: 118,
      SMA_200: 115
    };
  }
}
