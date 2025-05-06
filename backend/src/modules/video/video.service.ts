
import { Injectable } from '@nestjs/common';

@Injectable()
export class VideoService {
  private videos: string[] = [];

  generate(topic: string) {
    const videoName = `video_${Date.now()}_${topic}`;
    this.videos.push(videoName);
    return { success: true, video: videoName };
  }

  getList() {
    return this.videos;
  }
}
