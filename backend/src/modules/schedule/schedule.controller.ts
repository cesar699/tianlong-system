
import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('add')
  addTask(@Body() body: { id: string, delay: number }) {
    this.scheduleService.scheduleTask(body.id, body.delay, () => {
      console.log(\`[任务执行] \${body.id}\`);
    });
    return { status: 'scheduled' };
  }

  @Delete('cancel/:id')
  cancelTask(@Param('id') id: string) {
    this.scheduleService.cancelTask(id);
    return { status: 'cancelled' };
  }
}
