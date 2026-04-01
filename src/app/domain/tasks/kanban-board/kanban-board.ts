import { Component, inject, OnInit } from '@angular/core';
import { TaskStatus } from '../../../core/models/task.model';
import { TaskStore } from '../../../core/store/task.store';
//import { CdkDragDrop } from '@angular/cdk/drag-drop';

/**
 * Uso de inject, en este caso usamos inject y no el constructor.
 * Esta más recomendados en las APIs modernas de Angular y para componentes Standalone.
 */

@Component({
  selector: 'app-kanban-board',
  imports: [],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css',
  standalone: true,
})
export class KanbanBoard {
  storeTasks = inject(TaskStore);
  
  todo = this.storeTasks.getStatus(TaskStatus.Todo);
  doing = this.storeTasks.getStatus(TaskStatus.Doing);
  done = this.storeTasks.getStatus(TaskStatus.Done);

}
