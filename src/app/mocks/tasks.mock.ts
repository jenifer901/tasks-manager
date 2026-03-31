import { Task } from "../models/task.model";
import { TaskStatus } from "../models/task.model";
import { TaskPriority } from "../models/task.model";

export const MOCK_TASKS: Task[] = [
    {
        id: '1',
        title: 'Create dashboard',
        description: 'Build dashboard UI',
        status: TaskStatus.todo ,
        priority: TaskPriority.high,
        projectId: '1'
    },
     {
        id: '2',
        title: 'Create dashboard',
        description: 'Build dashboard UI',
        status: TaskStatus.todo ,
        priority: TaskPriority.medium,
        projectId: '1'
    },
     {
        id: '3',
        title: 'Create dashboard',
        description: 'Build dashboard UI',
        status: TaskStatus.todo ,
        priority: TaskPriority.low,
        projectId: '1'
    },
]