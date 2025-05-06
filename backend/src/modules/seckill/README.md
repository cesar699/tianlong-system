
# 秒杀模块接入指南

本模块采用 **Adapter + Queue** 架构，各平台真实接口接入示例：

## 目录结构
```
seckill/
├─ adapters/
│  ├ base.adapter.ts        # Adapter 接口定义
│  ├ jd.adapter.ts          # 京东适配器
│  ├ taobao.adapter.ts      # 淘宝适配器
│  ├ pinduoduo.adapter.ts   # 拼多多适配器
│  └ suning.adapter.ts      # 苏宁适配器
├─ seckill.service.ts       # 核心队列逻辑
├─ seckill.controller.ts    # REST 接口
└─ README.md                # 本文件
```

## 接入真实接口

1. **安装依赖**  
   ```bash
   npm install axios bullmq ioredis
   ```

2. **配置环境变量**  
   在 `.env` 中添加各平台 API 配置，例如：
   ```
   JD_API_KEY=your_jd_api_key
   TB_APP_KEY=your_taobao_app_key
   PDD_CLIENT_ID=xxx
   PDD_CLIENT_SECRET=xxx
   SUNING_CLIENT_ID=xxx
   SUNING_CLIENT_SECRET=xxx
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

3. **实现 Adapter**  
   在 `adapters/jd.adapter.ts` 中：
   ```ts
   import axios from 'axios';
   import { ISeckillAdapter } from './base.adapter';

   export class JdAdapter implements ISeckillAdapter {
     async login(account: any) {
       // 调用京东登录 API
       await axios.post(process.env.JD_LOGIN_URL, account);
     }
     async checkStock(sku: string) {
       const res = await axios.get(\`\${process.env.JD_STOCK_URL}?sku=\${sku}\`);
       return res.data.stock;
     }
     async placeOrder(sku: string) {
       const res = await axios.post(process.env.JD_ORDER_URL, { sku });
       return { success: res.data.success, orderId: res.data.orderId };
     }
   }
   ```

4. **启动队列 Worker**  
   服务启动时已在 `SeckillService` 构造函数中创建 Worker，确保已配置 Redis。

5. **前端调用**  
   ```js
   await axios.post('/api/seckill/start', null, {
     params: { platform: 'jd', sku: '123456', userId: 'user1' }
   });
   ```

6. **可视化面板**  
   在 `SeckillDashboard.vue` 中已实现多平台、多商品、实时库存和日志展示，后续可通过 UI 调整 `platform`、`sku`、`userId`。

---

完成以上步骤后，即可实现安全可靠、高效的多平台秒杀功能。后续可在可视化接口面板自由修改策略配置。
