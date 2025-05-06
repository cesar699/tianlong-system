import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { PluginService } from './plugin.service';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Controller('plugins')
export class PluginController {
  constructor(private ps: PluginService) {}

  @Get()
  @Roles('plugin:view')
  list() {
    return this.ps.list();
  }

  @Post(':id/toggle')
  @Roles('plugin:update')
  toggle(@Param('id') id: string, @Body('enabled') enabled: boolean) {
    return this.ps.toggle(id, enabled);
  }
}
