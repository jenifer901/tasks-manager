import { Component, inject, OnInit } from '@angular/core';
import { TaskStatus } from '../../core/models/task.model';
import { TaskService } from '../../core/service/task.service';
import { TaskStore } from '../../core/store/task.store';

/**
 * standalone component
 * inject() for dependeces
 * signal (tasks())
 * new control flow (@if, @for)
 * UI with Tailwind
 */

@Component({
  selector: 'app-dasboard',
  imports: [],
  templateUrl: './dasboard.html',
  styleUrl: './dasboard.css',
})
export class Dasboard implements OnInit {
 private taskService = inject(TaskService);
 store = inject(TaskStore)
 tasks = this.store.task;

  TASKSTATUS = TaskStatus;

 
  ngOnInit(){
    this.taskService.loadTasks().subscribe()
  }
  
}
