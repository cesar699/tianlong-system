
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginHistory } from './entities/login-history.entity';

@Injectable()
export class LoginHistoryService {
  constructor(@InjectRepository(LoginHistory) private repo: Repository<LoginHistory>) {}

  async record(userId: string, success: boolean, ip?: string) {
    const entry = this.repo.create({ userId, success, ip });
    return this.repo.save(entry);
  }
}
