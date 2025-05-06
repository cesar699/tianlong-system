import { Module } from '@nestjs/common';
import { StrategyService } from './strategy.service';
import { AiService } from '../ai/ai.service';

@Module({
  providers: [StrategyService],
})
export class StrategyModule {}
