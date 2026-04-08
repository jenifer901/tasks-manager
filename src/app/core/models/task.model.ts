export enum TaskPriority {
  'low',
  'medium',
  'high',
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  colum: string;
  priority?: TaskPriority;
  projectId?: string;
  assigneeId?: string;
}
