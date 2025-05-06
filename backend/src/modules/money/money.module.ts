import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoneyController } from './money.controller';
import { MoneyService } from './money.service';
import { MoneyOpportunitySchema } from './money.schema';
import { MoneyGateway } from './money.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'MoneyOpportunity', schema: MoneyOpportunitySchema }]),
  ],
  controllers: [MoneyController],
  providers: [MoneyService, MoneyGateway],
})
export class MoneyModule {}