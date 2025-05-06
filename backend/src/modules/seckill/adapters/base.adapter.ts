
export interface ISeckillAdapter {
  login(account: any): Promise<void>;
  checkStock(sku: string): Promise<number>;
  placeOrder(sku: string): Promise<{ success: boolean; orderId?: string }>;
}
