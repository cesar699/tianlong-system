import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { AiService } from '../ai/ai.service';

@Module({
  controllers: [ChatbotController],
  providers: [AiService],
})
export class ChatbotModule {}
