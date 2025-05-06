
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  getTopNews() {
    return [
      { title: 'AI突破性进展！全自动机器人进入量产', category: '科技' },
      { title: '全球股市震荡，美联储会议纪要公布', category: '财经' },
      { title: '新一轮冷空气来袭，五一出行需注意', category: '生活' }
    ];
  }

  getByCategory(category: string) {
    const all = this.getTopNews();
    return all.filter(item => item.category === category);
  }

  getSources() {
    return ['新浪新闻', '澎湃新闻', '腾讯新闻', '网易新闻'];
  }
}
