
import { Injectable } from '@nestjs/common';

@Injectable()
export class MultiAccountService {
  private accounts = {
    admin: ['jd_user_1', 'jd_user_2'],
    user: ['jd_user_a']
  };

  getUserAccounts(username: string) {
    return this.accounts[username] || [];
  }

  switchAccount(username: string, target: string) {
    return { active: target };
  }
}
