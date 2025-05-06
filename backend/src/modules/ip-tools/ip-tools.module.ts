import { Module } from '@nestjs/common';
import { Ip-toolsService } from './ip-tools.service';
import { Ip-toolsController } from './ip-tools.controller';

@Module({
  controllers: [Ip-toolsController],
  providers: [Ip-toolsService],
})
export class Ip-toolsModule {}