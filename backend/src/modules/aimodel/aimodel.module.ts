
import { Module } from '@nestjs/common';
import { AIModelController } from './aimodel.controller';
import { AIModelService } from './aimodel.service';

@Module({
  controllers: [AIModelController],
  providers: [AIModelService],
})
export class AIModelModule {}
