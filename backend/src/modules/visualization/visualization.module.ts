import { Module } from '@nestjs/common';
import { VisualizationService } from './visualization.service';
import { VisualizationController } from './visualization.controller';

@Module({
  controllers: [VisualizationController],
  providers: [VisualizationService],
})
export class VisualizationModule {}