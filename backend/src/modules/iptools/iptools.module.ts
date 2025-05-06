
import { Module } from '@nestjs/common';
import { IPToolsService } from './iptools.service';
import { IPToolsController } from './iptools.controller';

@Module({
  providers: [IPToolsService],
  controllers: [IPToolsController],
})
export class IPToolsModule {}
