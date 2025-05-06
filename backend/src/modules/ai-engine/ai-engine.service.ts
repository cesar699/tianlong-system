
import { Injectable } from '@nestjs/common';

@Injectable()
export class AiEngineService {
  private currentModel = 'ChatGPT';

  private availableModels = ['ChatGPT', 'Claude', 'DeepSeek', 'Gemini'];

  getCurrentModel() {
    return {
      current: this.currentModel,
      available: this.availableModels
    };
  }

  switchModel(model: string) {
    if (this.availableModels.includes(model)) {
      this.currentModel = model;
      return { success: true, current: this.currentModel };
    }
    return { success: false, message: '模型不可用' };
  }

  generateText(prompt: string) {
    return {
      model: this.currentModel,
      prompt,
      response: `[模拟回复：${this.currentModel} 根据 "${prompt}" 生成的内容]`
    };
  }
}
