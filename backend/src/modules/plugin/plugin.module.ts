import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plugin } from './entities/plugin.entity';
import { PluginService } from './plugin.service';
import { PluginController } from './plugin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plugin])],
  providers: [PluginService],
  controllers: [PluginController],
})
export class PluginModule {}
