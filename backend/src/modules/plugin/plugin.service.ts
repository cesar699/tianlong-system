import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plugin } from './entities/plugin.entity';

@Injectable()
export class PluginService {
  constructor(@InjectRepository(Plugin) private repo: Repository<Plugin>) {}

  async list() {
    return this.repo.find();
  }

  async toggle(id: string, enable: boolean) {
    const p = await this.repo.findOne(id);
    if (!p) return null;
    p.enabled = enable;
    return this.repo.save(p);
  }
}
