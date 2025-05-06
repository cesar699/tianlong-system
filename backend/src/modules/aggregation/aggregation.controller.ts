import { Controller, Get, Query, Sse } from '@nestjs/common';
import { AggregationService } from './aggregation.service';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Controller('aggregation')
export class AggregationController {
  constructor(private readonly aggService: AggregationService) {}

  @Get()
  getAll(@Query('search') search?: string) {
    return search ? this.aggService.search(search) : this.aggService.getAll();
  }

  @Get('stream')
  @Sse()
  stream(): Observable<MessageEvent> {
    return interval(10000).pipe(
      startWith(0),
      map(() => this.aggService.getAll().then(data => ({ data } as MessageEvent))),
    );
  }
}
