
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QlService } from './ql.service';

@Controller('ql')
export class QlController {
  constructor(private readonly qlService: QlService) {}

  @Get('tasks')
  getTasks() {
    return this.qlService.getTasks();
  }

  @Post('tasks')
  createTask(@Body() body: { command: string; schedule: string; name: string }) {
    return this.qlService.createTask(body.command, body.schedule, body.name);
  }

  @Put('tasks/:id')
  updateTask(@Param('id') id: number, @Body() body: any) {
    return this.qlService.updateTask(id, body);
  }

  @Delete('tasks/:id')
  deleteTask(@Param('id') id: number) {
    return this.qlService.deleteTask(id);
  }

  @Put('tasks/:id/run')
  runTask(@Param('id') id: number) {
    return this.qlService.runTask(id);
  }
}
