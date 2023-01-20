import { Task } from './task.model';
export declare class TasksService {
    private tasks;
    private id;
    getAllTasks(): any[];
    createTask(title: string, description: string): Task;
}
