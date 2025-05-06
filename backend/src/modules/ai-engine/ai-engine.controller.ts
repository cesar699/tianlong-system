
import { Controller, Get, Post, Query } from '@nestjs/common';
import { AiEngineService } from './ai-engine.service';

@Controller('ai-engine')
export class AiEngineController {
  constructor(private readonly aiService: AiEngineService) {}

  @Get('current')
  getCurrentModel() {
    return this.aiService.getCurrentModel();
  }

  @Post('switch')
  switchModel(@Query('model') model: string) {
    return this.aiService.switchModel(model);
  }

  @Get('generate')
  generate(@Query('prompt') prompt: string) {
    return this.aiService.generateText(prompt);
  }
}
