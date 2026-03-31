export enum TaskStatus {
    'todo',
    'doing',
    'done'};

	export enum TaskPriority {
        'low',
        'medium',
        'high'
    };

	export interface Task {
				id: string;
				title: string;
				description: string;
				status: TaskStatus;
				priority: TaskPriority;
				projectId: string;
				assigneeId?: string;
    };