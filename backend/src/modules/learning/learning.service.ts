
import { Injectable } from '@nestjs/common';

@Injectable()
export class LearningService {
  getVideoList() {
    return [
      { title: 'JavaScript 入门', duration: '35min' },
      { title: 'NestJS 高级教程', duration: '45min' }
    ];
  }

  uploadMaterial(fileName: string, uploader: string) {
    return { status: 'success', fileName, uploader, time: new Date().toISOString() };
  }

  listCloudFiles() {
    return ['JS教程.pdf', 'AI论文.docx', '实战项目.zip'];
  }
}
