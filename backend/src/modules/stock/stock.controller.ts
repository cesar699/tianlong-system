
import { Controller, Get, Query } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get('history')
  getHistory(@Query('symbol') symbol: string) {
    return this.stockService.getHistory(symbol);
  }

  @Get('predict')
  getPrediction(@Query('symbol') symbol: string) {
    return this.stockService.predict(symbol);
  }

  @Get('indicators')
  getIndicators(@Query('symbol') symbol: string) {
    return this.stockService.indicators(symbol);
  }
}
