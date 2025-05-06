import { Injectable } from '@nestjs/common';
import { AiService } from '../ai/ai.service';

@Injectable()
export class BehaviorService {
  constructor(private ai: AiService) {}

  async analyze(userId: string, actions: string[]) {
    const text = actions.join(' ');
    const vector = await this.ai.embedding(text);
    // TODO: save vector to database or vector store
    return { status: 'ok', vector };
  }
}
