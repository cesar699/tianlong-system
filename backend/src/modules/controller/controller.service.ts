
import { Injectable } from '@nestjs/common';

@Injectable()
export class ControllerService {
  private modulesStatus = {
    user: true,
    jd: true,
    ai: true,
    video: true,
    novel: true,
    news: true,
    money: true,
    music: true
  };

  getModulesStatus() {
    return this.modulesStatus;
  }

  toggleModule(module: string, enabled: boolean) {
    if (this.modulesStatus.hasOwnProperty(module)) {
      this.modulesStatus[module] = enabled;
      return { module, enabled };
    }
    return { error: '模块不存在' };
  }

  getSystemConfig() {
    return {
      systemName: '天龙系统',
      version: '1.0.0',
      modules: Object.keys(this.modulesStatus),
      uptime: process.uptime()
    };
  }
}
