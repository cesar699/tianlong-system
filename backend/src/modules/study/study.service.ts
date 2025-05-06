
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudyService {
  getResources() {
    return [
      { id: 1, name: '编程入门.pdf', type: 'pdf' },
      { id: 2, name: 'Vue实战课程.mp4', type: 'video' }
    ];
  }
}
