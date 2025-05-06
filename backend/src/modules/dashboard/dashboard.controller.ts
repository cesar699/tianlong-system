
import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('system')
  getSystemMetrics() {
    return this.dashboardService.getSystemMetrics();
  }

  @Get('modules')
  getModulesStatus() {
    return this.dashboardService.getModuleStatus();
  }
}
