import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from '../ai/ai.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private ai: AiService) {}

  @Post('message')
  async handle(@Body('text') text: string) {
    const reply = await this.ai.chatCompletion(text, { temperature: 0.7 });
    return { reply };
  }
}
