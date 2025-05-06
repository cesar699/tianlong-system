
// backend/src/modules/system-settings/settings.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post('update')
  update(@Body('key') key: string, @Body('value') value: any) {
    return this.service.update(key, value);
  }

  @Get('proxies')
  getProxies() {
    return this.service.get('sniper.proxies');
  }

  @Post('proxies')
  updateProxies(@Body('proxies') proxies: string[]) {
    return this.service.update('sniper.proxies', proxies);
  }
}
