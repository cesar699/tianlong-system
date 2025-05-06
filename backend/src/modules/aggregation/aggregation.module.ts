import { Module, CacheModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentItemSchema } from './content.schema';
import { AggregationService } from './aggregation.service';
import { AggregationController } from './aggregation.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ContentItem', schema: ContentItemSchema }]),
    ScheduleModule.forRoot(),
    CacheModule.register({
      ttl: 300, // 5 minutes
      isGlobal: true,
    }),
  ],
  providers: [AggregationService],
  controllers: [AggregationController],
})
export class AggregationModule {}
