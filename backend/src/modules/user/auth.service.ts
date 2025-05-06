
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUserByPassword(username: string, password: string) {
    // 模拟用户验证
    return { username, token: 'mock-token-jwt' };
  }

  validateUserByQRCode(qrToken: string) {
    // 模拟扫码登录
    return { username: 'qr_user', token: 'mock-token-qr' };
  }

  refreshToken(oldToken: string) {
    return { token: oldToken + '_refreshed' };
  }
}
