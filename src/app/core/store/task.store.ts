import { Injectable, signal, computed } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

/**
 * uso de signals
 * tipo de signal computed
 * estado reactivo
 */

@Injectable({
  providedIn: 'root',
})
export class TaskStore {
  private tasksSignal = signal<Task[]>([]);

  task = computed(() => this.tasksSignal());

  getStatus(status: TaskStatus): Task[]{
    return this.tasksSignal().filter( task => task.status === status)
  }

  setTasks(tasks: Task[]){
    this.tasksSignal.set(tasks)
  }

  addTask(task: Task) {
    this.tasksSignal.update((tasks) => [...tasks, task]);
  }

  updateTask(task: Task) {
    this.tasksSignal.update((tasks) => tasks.map((t) => t.id === task.id ? task : t));
  }

  deleteTask(id: string) {
   this.tasksSignal.update((t) => t.filter( v => (v.id !== id)));
  }




}
