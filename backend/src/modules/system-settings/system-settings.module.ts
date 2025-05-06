import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { SystemSettingsService } from './system-settings.service';
import { SystemSettingsController } from './system-settings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [SystemSettingsService],
  controllers: [SystemSettingsController],
  exports: [SystemSettingsService],
})
export class SystemSettingsModule {}
