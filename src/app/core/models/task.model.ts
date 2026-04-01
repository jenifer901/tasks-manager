export enum TaskStatus {
  Todo ='todo',
  Doing ='doing',
  Done = 'done',
}

export enum TaskPriority {
  'low',
  'medium',
  'high',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: string;
  assigneeId?: string;
}
