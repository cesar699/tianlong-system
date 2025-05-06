
import { Controller, Post, Get, Delete, Body, Query } from '@nestjs/common';
import { SchedulerService, ScheduledTask } from './scheduler.service';

@Controller('schedule')
export class SchedulerController {
  constructor(private readonly service: SchedulerService) {}

  @Post('task')
  create(@Body() task: ScheduledTask) {
    return this.service.createTask(task);
  }

  @Get('tasks')
  list() {
    return this.service.listTasks();
  }

  @Delete('task')
  remove(@Query('id') id: string) {
    return this.service.deleteTask(id);
  }

  @Get('queue-status')
  status() {
    return this.service.getQueueStatus();
  }
}
