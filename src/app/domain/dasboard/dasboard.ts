import { Component, inject } from '@angular/core';
import { TaskRepository } from '../../core/repositories/task.repository';
import { AuthService } from '../../core/service/auth.services';
import { TaskStatus } from '../../models/task.model';

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
export class Dasboard {
  taskRepo = inject(TaskRepository);
  auth = inject(AuthService);

  TASKSTATUS = TaskStatus;

  tasks = this.taskRepo.task;


}
