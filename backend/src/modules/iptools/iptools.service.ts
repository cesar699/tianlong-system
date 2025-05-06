
import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';

@Injectable()
export class IPToolsService {
  analyzeIP(ip: string) {
    const geo = geoip.lookup(ip);
    const riskScore = this.calculateRisk(ip);
    return {
      ip,
      location: geo,
      riskScore,
      timestamp: new Date().toISOString()
    };
  }

  calculateRisk(ip: string): number {
    // 模拟逻辑：内网 IP 风险较低，外部高频 IP 提高分数
    if (ip.startsWith('192.') || ip.startsWith('10.')) return 1;
    if (ip.startsWith('127.')) return 0;
    return Math.floor(Math.random() * 10) + 1; // 模拟 1-10 分
  }

  logAccess(ip: string, action: string) {
    // 模拟归档，可替换为数据库写入
    console.log(\`[IP日志] \${ip} 执行了操作：\${action}\`);
  }
}
