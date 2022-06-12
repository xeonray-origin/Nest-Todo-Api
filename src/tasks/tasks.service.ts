import { Injectable } from '@nestjs/common';
import { generateFakeTasks, generateTaskId } from 'src/utils/helpers';
import { Task, Tasks } from './tasks.dto';

@Injectable()
export class TasksService {
  private readonly tasks: Tasks = generateFakeTasks();

  getAllTasks(): Tasks {
    return this.tasks;
  }

  createTask(task: Task): string {
    console.log(task);
    const id = generateTaskId();
    this.tasks[id] = {
      ...task,
      id,
    };
    return id;
  }

  find(id: string): Task {
    const item = this.tasks[id];
    console.log(item);
    if (item) {
      return item;
    }
    throw new Error('Item not found');
  }
}
