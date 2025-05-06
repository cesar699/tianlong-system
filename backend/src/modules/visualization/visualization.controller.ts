import { Controller, Get } from '@nestjs/common';
import { VisualizationService } from './visualization.service';

@Controller('visualization')
export class VisualizationController {
  constructor(private readonly service: VisualizationService) {}

  @Get()
  getInfo() {
    return { message: 'visualization module placeholder' };
  }
}