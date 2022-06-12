import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, Tasks } from './types';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  getTasks(): Tasks {
    return this.taskService.getAllTasks();
  }
  @Post()
  createTask(@Body('data') data: Task): string {
    return this.taskService.createTask(data);
  }

  @Get(':id')
  findTask(@Param('id') id: string) {
    try {
      return this.taskService.find(id);
    } catch (e) {
      console.log(e);
      return e.message;
    }
  }
}
