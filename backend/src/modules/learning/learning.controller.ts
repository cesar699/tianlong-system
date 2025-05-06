
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LearningService } from './learning.service';

@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  @Get('videos')
  getVideos() {
    return this.learningService.getVideoList();
  }

  @Post('upload')
  upload(@Body() body: { fileName: string, uploader: string }) {
    return this.learningService.uploadMaterial(body.fileName, body.uploader);
  }

  @Get('cloud')
  getCloudFiles() {
    return this.learningService.listCloudFiles();
  }
}
