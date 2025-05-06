
import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService {
  logLogin(username: string, ip: string) {
    console.log(`User ${username} logged in from ${ip}`);
    return true;
  }

  getLogs(username: string) {
    return [
      { time: '2025-05-05 12:00', ip: '127.0.0.1', ua: 'chrome' },
      { time: '2025-05-04 19:00', ip: '192.168.0.2', ua: 'mobile' }
    ];
  }

  verifyCaptcha(code: string) {
    return code === '1234';
  }
}
