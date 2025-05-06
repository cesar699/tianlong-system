
import { Injectable } from '@nestjs/common';

@Injectable()
export class NovelService {
  private novels: string[] = [];

  generate(title: string) {
    const novel = `小说《${title}》章节已生成`;
    this.novels.push(novel);
    return { success: true, content: novel };
  }

  getList() {
    return this.novels;
  }
}
