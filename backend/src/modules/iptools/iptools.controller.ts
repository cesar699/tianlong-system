
import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { IPToolsService } from './iptools.service';

@Controller('iptools')
export class IPToolsController {
  constructor(private readonly ipService: IPToolsService) {}

  @Get('analyze')
  analyze(@Query('ip') ip: string) {
    return this.ipService.analyzeIP(ip);
  }

  @Post('log')
  logAccess(@Body() body: { ip: string, action: string }) {
    this.ipService.logAccess(body.ip, body.action);
    return { status: 'logged' };
  }
}
