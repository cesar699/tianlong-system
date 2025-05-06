
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);

  private tasks: Record<string, NodeJS.Timeout> = {};

  scheduleTask(id: string, delay: number, callback: () => void) {
    if (this.tasks[id]) {
      clearTimeout(this.tasks[id]);
    }

    this.logger.log(\`任务[\${id}]将在\${delay}ms后执行。\`);
    this.tasks[id] = setTimeout(() => {
      try {
        callback();
        this.logger.log(\`任务[\${id}]成功执行。\`);
      } catch (err) {
        this.logger.error(\`任务[\${id}]执行失败，准备重试。\`, err.stack);
        this.retryTask(id, delay, callback);
      }
    }, delay);
  }

  retryTask(id: string, delay: number, callback: () => void) {
    setTimeout(() => {
      this.logger.warn(\`任务[\${id}]重试中...\`);
      try {
        callback();
        this.logger.log(\`任务[\${id}]重试成功。\`);
      } catch (err) {
        this.logger.error(\`任务[\${id}]重试失败。\`, err.stack);
      }
    }, delay);
  }

  cancelTask(id: string) {
    if (this.tasks[id]) {
      clearTimeout(this.tasks[id]);
      delete this.tasks[id];
      this.logger.log(\`任务[\${id}]已取消。\`);
    }
  }
}
