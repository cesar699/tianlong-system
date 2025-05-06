import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendDingTalk(message: string) {/* implement */}
  async sendWeChat(message: string) {/* implement */}
  async sendTelegram(message: string) {/* implement */}
  async sendWebhook(url: string, payload: any) {/* implement */}
}
