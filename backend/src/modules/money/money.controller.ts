import { Controller, Get, Post, Query, UseGuards, Sse } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { MoneyService } from './money.service';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@UseGuards(JwtAuthGuard)
@Controller('money')
export class MoneyController {
  constructor(private readonly moneyService: MoneyService) {}

  @Post('toggle')
  toggle(@Query('enable') enable: string) {
    return this.moneyService.toggle(enable === 'true');
  }

  @Get('opportunities')
  getOpportunities() {
    return this.moneyService.getOpportunities();
  }

  @Get('filtered')
  getFiltered() {
    return this.moneyService.getFilteredList();
  }

  // Server-Sent Events for real-time updates
  @Sse('stream')
  stream(): Observable<MessageEvent> {
    return interval(5000).pipe(
      startWith(0),
      map(async () => {
        const data = await this.moneyService.getOpportunities();
        return { data } as MessageEvent;
      }),
    );
  }
}