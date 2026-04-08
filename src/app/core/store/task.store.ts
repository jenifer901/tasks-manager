import { Injectable, signal, computed, inject } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';
import { Observable } from 'rxjs';

/**
 * uso de signals
 * tipo de signal computed
 * estado reactivo
 */

@Injectable({
  providedIn: 'root',
})
export class TaskStore {
  private tasksService = inject(TaskService);
  private tasksSignal = signal<Task[]>([]);

  task = computed(() => this.tasksSignal());

  getTask(): void {
    this.tasksService.loadTasks().subscribe((tasks) => this.tasksSignal.set(tasks));
  }

  addTask(task: Task) {
    this.tasksService
      .createTask(task)
      .subscribe(() => this.tasksSignal.update((tasks) => [...tasks, task]));
  }

  moveTask(taskId: string, newColumnId: string, newIndex: number) {
    const task = [...this.tasksSignal()];

    const movedTask = task.find((c) => c.id === taskId);
    if (!movedTask) return;

    const filtered = task.filter((c) => c.id !== taskId);

    const targetTask = filtered.filter((c) => c.id === newColumnId);

    targetTask.splice(newIndex, 0, {
      ...movedTask,
      id: newColumnId,
    });

    const result = [...filtered.filter((c) => c.id !== newColumnId), ...targetTask];

    this.tasksSignal.set(result);
  }

  setTasks(tasks: Task[]) {
    this.tasksSignal.set(tasks);
  }

  updateTask(task: Task) {
    this.tasksSignal.update((tasks) => tasks.map((t) => (t.id === task.id ? task : t)));
  }

  deleteTask(id: string) {
    this.tasksSignal.update((t) => t.filter((v) => v.id !== id));
  }
}
