export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
export declare enum TaskStatus {
    OPEN = "OPEN",
    INPROGRESS = "INPROGRESS",
    DONE = "DONE"
}
