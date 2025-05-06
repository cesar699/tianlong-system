import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuditService } from './audit.service';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Controller('audit-logs')
export class AuditController {
  constructor(private audit: AuditService) {}

  @Get()
  @Roles('audit:view')
  async list(@Query('level') level?: string,
             @Query('from') from?: string,
             @Query('to') to?: string) {
    const filter: any = {};
    if (level) filter.level = level;
    if (from) filter.from = new Date(from);
    if (to) filter.to = new Date(to);
    return this.audit.query(filter);
  }
}
