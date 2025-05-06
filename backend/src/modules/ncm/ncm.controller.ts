
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { NcmService } from './ncm.service';

@Controller('ncm')
export class NcmController {
  constructor(private readonly ncmService: NcmService) {}

  @Post('login')
  async login(@Body() body: { phone: string, password: string }) {
    return this.ncmService.login(body.phone, body.password);
  }

  @Get('playlists')
  async playlists(@Query('uid') uid: number) {
    return this.ncmService.getUserPlaylists(uid);
  }
}
