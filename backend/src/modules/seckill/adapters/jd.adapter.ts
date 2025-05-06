
import axios from 'axios';
import { ISeckillAdapter } from './base.adapter';

export class JdAdapter implements ISeckillAdapter {
  private cookie: string = '';

  async login(account: any): Promise<void> {
    // TODO: Replace with real JD login API or automation script
    const resp = await axios.post('https://api.jd.com/login', account);
    this.cookie = resp.headers['set-cookie'].join(';');
  }

  async checkStock(sku: string): Promise<number> {
    const resp = await axios.get(\`https://api.jd.com/stock?sku=\${sku}\`, {
      headers: { Cookie: this.cookie }
    });
    return resp.data.stock;
  }

  async placeOrder(sku: string): Promise<{ success: boolean; orderId?: string }> {
    const resp = await axios.post('https://api.jd.com/order', { sku }, {
      headers: { Cookie: this.cookie }
    });
    return { success: resp.data.code === 0, orderId: resp.data.orderId };
  }
}
