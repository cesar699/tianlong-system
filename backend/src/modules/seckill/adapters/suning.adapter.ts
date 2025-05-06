
import { ISeckillAdapter } from './base.adapter';
import axios from 'axios';

export class SuningAdapter implements ISeckillAdapter {
  private token: string = '';

  async login(account: any): Promise<void> {
    // TODO: Suning login logic
    this.token = 'mock-token';
  }

  async checkStock(sku: string): Promise<number> {
    const resp = await axios.get(\`https://api.suning.com/stock?sku=\${sku}\`, {
      headers: { Authorization: \`Bearer \${this.token}\` }
    });
    return resp.data.stock;
  }

  async placeOrder(sku: string): Promise<{ success: boolean }> {
    const resp = await axios.post('https://api.suning.com/order', { sku }, {
      headers: { Authorization: \`Bearer \${this.token}\` }
    });
    return { success: resp.data.success };
  }
}
