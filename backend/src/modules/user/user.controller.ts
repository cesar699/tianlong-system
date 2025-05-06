
import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserProfileService } from './user.profile.service';
import { SecurityService } from './security.service';
import { MultiAccountService } from './user.multi.service';
import { UserStatsService } from './user.stats.service';
import { AuthService } from './auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly profile: UserProfileService,
    private readonly security: SecurityService,
    private readonly multi: MultiAccountService,
    private readonly stats: UserStatsService,
    private readonly auth: AuthService
  ) {}

  @Get('profile')
  profileInfo(@Query('username') username: string) {
    return this.profile.getProfile(username);
  }

  @Get('logs')
  getLogs(@Query('username') username: string) {
    return this.security.getLogs(username);
  }

  @Get('accounts')
  getAccounts(@Query('username') username: string) {
    return this.multi.getUserAccounts(username);
  }

  @Post('switch')
  switch(@Query('username') username: string, @Query('target') target: string) {
    return this.multi.switchAccount(username, target);
  }

  @Get('stats')
  stats(@Query('username') username: string) {
    return this.stats.getStats(username);
  }

  @Post('refresh')
  refresh(@Query('token') token: string) {
    return this.auth.refreshToken(token);
  }
}
