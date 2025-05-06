import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SystemSettingsService {
  private cache = new Map<string, string>();

  constructor(
    @InjectRepository(Setting)
    private settingsRepo: Repository<Setting>,
  ) {}

  async getAll() {
    const settings = await this.settingsRepo.find();
    settings.forEach(s => this.cache.set(s.key, s.value));
    return settings;
  }

  async update(dto: { key: string; value: string }) {
    let setting = await this.settingsRepo.findOne({ where: { key: dto.key } });
    if (setting) {
      setting.value = dto.value;
    } else {
      setting = this.settingsRepo.create(dto);
    }
    const saved = await this.settingsRepo.save(setting);
    this.cache.set(saved.key, saved.value);
    return saved;
  }

  get(key: string): string {
    return this.cache.get(key);
  }
}
