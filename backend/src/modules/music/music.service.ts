
import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  private fakeUser = { id: 1, name: '测试用户', preferences: ['摇滚', '流行'] };

  autoLogin() {
    return { user: this.fakeUser, message: '网易云登录成功（模拟）' };
  }

  getPlayHistory(userId: number) {
    return [
      { song: '晴天', artist: '周杰伦', time: '2024-05-01 14:00' },
      { song: '夜曲', artist: '周杰伦', time: '2024-05-01 14:30' },
    ];
  }

  getRecommendations() {
    return [
      { song: '告白气球', artist: '周杰伦' },
      { song: '光年之外', artist: '邓紫棋' },
    ];
  }
}
