import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SystemSettingsService } from './system-settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Controller('system-settings')
export class SystemSettingsController {
  constructor(private settingsService: SystemSettingsService) {}

  @Get()
  @Roles('settings:view')
  async getAll() {
    return this.settingsService.getAll();
  }

  @Post()
  @Roles('settings:update')
  async update(@Body() dto: UpdateSettingDto) {
    return this.settingsService.update(dto);
  }
}
