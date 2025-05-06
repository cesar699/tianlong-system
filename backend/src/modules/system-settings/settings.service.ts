
// backend/src/modules/system-settings/settings.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private settings = new Map<string, any>([
    ['site.title', '天龙系统'],
    ['interface.theme', 'dark'],
    ['system.language', 'zh'],
    ['sniper.proxies', ['proxy1.example.com:8000', 'proxy2.example.com:8000']],
  ]);

  getAll() {
    const obj = {};
    this.settings.forEach((v, k) => { obj[k] = v; });
    return obj;
  }

  get(key: string) {
    return this.settings.get(key);
  }

  update(key: string, value: any) {
    this.settings.set(key, value);
    return { key, value };
  }
}
