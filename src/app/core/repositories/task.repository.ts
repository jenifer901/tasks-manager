import { Injectable, signal, computed } from "@angular/core";
import { Task, TaskStatus } from "../../models/task.model";
import { MOCK_TASKS } from "../../mocks/tasks.mock";

/**
 * uso de signals 
 * tipo de signal computed
 * estado reactivo
 */

@Injectable({
    providedIn: 'root'
})
export class TaskRepository {
    private tasksSignal = signal<Task[]>(MOCK_TASKS);

    task = computed(() => this.tasksSignal());

    gestStatus(status: TaskStatus) {

        return computed(() => 
        this.tasksSignal().filter(t => t.status === status))
    }

    add(task: Task) {
        this.tasksSignal.update(tasks => [...tasks, task]);
    }

    updateStatus(id: string, status: Task['status']) {

        this.tasksSignal.update(tasks => 
            tasks.map(t =>
                t.id === id ? {...t, status} : t
            )
        );
    }

}