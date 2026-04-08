import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../models/task.model';
import { ApiService } from './api.service';
import { TaskStore } from '../store/task.store';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = inject(ApiService);

  loadTasks(): Observable<Task[]> {
    return this.api.get('tasks');
  }

  createTask(task: Task): Observable<Task[]> {
    return this.api.post('tasks', task);
  }

  /* update(task: Task) {

        return this.http.put<Task>(
            this.api.endpoint(`tasks/${task.id}`),
            task
        ).pipe(
            tap(updated => this.store.updateTask(updated))
        )
    }

    deleteTask(id: string){

        return this.http.delete(
            this.api.endpoint(`tasks/${id}`)
        ).pipe(
            tap(()=> this.store.deleteTask(id))
        )
    }*/
}
