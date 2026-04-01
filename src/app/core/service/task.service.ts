import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "../models/task.model";
import { ApiService } from './api.service';import { TaskStore } from "../store/task.store";
import { tap } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class TaskService{
    private http = inject(HttpClient)
    private api = inject(ApiService)
    private store = inject(TaskStore)

    loadTasks() {

        return this.api.get('tasks').pipe(
            tap((tasks) => this.store.setTasks(tasks as Task[]))
        )
    }

    /*createTask(task: Partial<Task>) {

        return this.http.post<Task>(
            this.api.endpoint('tasks'),
            task
        ).pipe(
            tap(newTask => this.store.addTask(newTask))
        )
    }

    update(task: Task) {

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