
import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class DashboardService {
  getSystemMetrics() {
    return {
      uptime: os.uptime(),
      loadAverage: os.loadavg(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      usedMemory: os.totalmem() - os.freemem(),
      cpuCount: os.cpus().length,
      platform: os.platform(),
      arch: os.arch(),
    };
  }

  getModuleStatus(): any[] {
    // 示例数据，实际可根据服务运行状态动态获取
    return [
      { name: '用户系统', status: '正常', cpu: 2.5, memory: 120 },
      { name: '抢购系统', status: '高负载', cpu: 25, memory: 480 },
      { name: 'AI模块', status: '正常', cpu: 10, memory: 220 },
    ];
  }
}
