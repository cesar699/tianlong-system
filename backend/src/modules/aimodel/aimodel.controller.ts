
import { Controller, Get, Query } from '@nestjs/common';
import { AIModelService } from './aimodel.service';

@Controller('aimodel')
export class AIModelController {
  constructor(private readonly aiModelService: AIModelService) {}

  @Get('current')
  getCurrentModel() {
    return this.aiModelService.getCurrentModel();
  }

  @Get('switch')
  switchModel(@Query('name') name: string) {
    return this.aiModelService.switchModel(name);
  }
}
