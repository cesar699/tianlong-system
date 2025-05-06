
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProfileService {
  getProfile(username: string) {
    return {
      username,
      avatar: `/cdn/avatar/${username}.png`,
      preferences: { theme: 'dark', defaultModule: 'jd' },
      boundDevices: ['device-1', 'device-2'],
      boundIPs: ['192.168.1.1']
    };
  }
}
