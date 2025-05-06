
import { Controller, Get, Post, Query } from '@nestjs/common';
import { ControllerService } from './controller.service';

@Controller('controller')
export class ControllerController {
  constructor(private readonly service: ControllerService) {}

  @Get('status')
  getStatus() {
    return this.service.getModulesStatus();
  }

  @Post('toggle')
  toggle(@Query('module') module: string, @Query('enable') enable: string) {
    return this.service.toggleModule(module, enable === 'true');
  }

  @Get('config')
  getConfig() {
    return this.service.getSystemConfig();
  }
}
