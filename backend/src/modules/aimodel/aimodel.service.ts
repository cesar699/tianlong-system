
import { Injectable } from '@nestjs/common';

@Injectable()
export class AIModelService {
  private currentModel = 'ChatGPT';

  getCurrentModel() {
    return { model: this.currentModel };
  }

  switchModel(name: string) {
    this.currentModel = name;
    return { success: true, newModel: this.currentModel };
  }
}
