
import { Module } from '@nestjs/common';
import { ControllerService } from './controller.service';
import { ControllerController } from './controller.controller';

@Module({
  providers: [ControllerService],
  controllers: [ControllerController],
})
export class ControllerModule {}
