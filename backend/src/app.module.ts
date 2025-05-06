import { XssInterceptor } from './common/interceptors/xss.interceptor';
import { RateLimitGuard } from './common/guards/rate-limit.guard';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { SearchModule } from './modules/search/search.module';
import { CaptchaModule } from './modules/captcha/captcha.module';
import { DataSourceModule } from './modules/data-source/data-source.module';
import { PriceModule } from './modules/price/price.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { NotificationModule } from './modules/notification/notification.module';

import { Module } from '@nestjs/common';
import { SystemSettingsModule } from './modules/system-settings/system-settings.module'; } from '@nestjs/common';
import { QlModule } from './modules/ql/ql.module';
// ... other imports

@Module({
  imports: [
    SearchModule,
    CaptchaModule,
    DataSourceModule,
    PriceModule,
    SchedulerModule,
    NotificationModule,
    PluginModule,
    AuditModule,
    SystemSettingsModule,
    // ... other modules
    QlModule,
  ],
})
export class AppModule {}