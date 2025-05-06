import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './entities/log.entity';

@Injectable()
export class AuditService {
  constructor(@InjectRepository(Log) private logRepo: Repository<Log>) {}

  async write(level: string, message: string, meta?: any) {
    const log = this.logRepo.create({ level, message, meta });
    return this.logRepo.save(log);
  }

  async query(filter: { level?: string; from?: Date; to?: Date }) {
    const qb = this.logRepo.createQueryBuilder('log');
    if (filter.level) qb.andWhere('log.level = :level', { level: filter.level });
    if (filter.from) qb.andWhere('log.timestamp >= :from', { from: filter.from });
    if (filter.to) qb.andWhere('log.timestamp <= :to', { to: filter.to });
    return qb.orderBy('log.timestamp', 'DESC').getMany();
  }
}
