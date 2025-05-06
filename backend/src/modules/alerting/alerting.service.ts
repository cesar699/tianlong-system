
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AlertingService {
  private logger = new Logger(AlertingService.name);

  // Example alert method
  alert(message: string) {
    this.logger.warn('ALERT: ' + message);
    // integrate email/SMS/Webhook here
  }
}
