import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks = [];
    private id = 0;

    getAllTasks() {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        this.id += 1;
        const new_task: Task = {
            id: this.id,
            title,
            description,
            status: TaskStatus.OPEN,
        }
        this.tasks.push(new_task);

        return new_task;
    }
}
