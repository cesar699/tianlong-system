
import { Controller, Post, Get, Query } from '@nestjs/common';
import { JdService } from './jd.service';

@Controller('jd')
export class JdController {
  constructor(private readonly jdService: JdService) {}

  @Post('buy')
  async buy(@Query('sku') sku: string) {
    return this.jdService.buyProduct(sku);
  }

  @Get('status')
  async status() {
    return this.jdService.getStatus();
  }
}
