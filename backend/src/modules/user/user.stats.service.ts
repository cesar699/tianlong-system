
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserStatsService {
  getStats(username: string) {
    return {
      loginCount: 42,
      lastActive: '2025-05-05 11:00',
      moduleUsage: { jd: 30, ai: 5, video: 7 }
    };
  }
}
