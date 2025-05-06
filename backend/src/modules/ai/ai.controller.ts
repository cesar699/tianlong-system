import { Controller, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly service: AiService) {}

  @Get()
  getInfo() {
    return { message: 'ai module placeholder' };
  }
}