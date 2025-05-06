
import { Module } from '@nestjs/common';
import { SeckillController } from './seckill.controller';
import { AiStrategyService } from './strategy/ai-strategy.service';

@Module({
  controllers: [SeckillController],
  providers: [AiStrategyService],
})
export class SeckillModule {}
