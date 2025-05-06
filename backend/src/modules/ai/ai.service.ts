import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class AiService {
  private client: OpenAIApi;

  constructor() {
    const provider = process.env.AI_PROVIDER;
    if (provider === 'openai') {
      const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY, basePath: process.env.OPENAI_API_BASE });
      this.client = new OpenAIApi(config);
    }
    // Extend for other providers as needed
  }

  async chatCompletion(prompt: string, options = {}) {
    const res = await this.client.createChatCompletion({
      model: options['model'] || 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      ...options,
    });
    return res.data.choices[0].message.content;
  }

  async embedding(text: string) {
    const res = await this.client.createEmbedding({
      model: 'text-embedding-3-small',
      input: text,
    });
    return res.data.data[0].embedding;
  }
}
