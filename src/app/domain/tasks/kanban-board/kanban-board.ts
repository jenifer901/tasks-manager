import { Component, inject } from '@angular/core';
import { TaskRepository } from '../../../core/repositories/task.repository';
import { TaskStatus } from '../../../models/task.model';
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
  standalone: true
})
export class KanbanBoard {
  taskRepo = inject(TaskRepository);

  todo = this.taskRepo.gestStatus(TaskStatus.todo);
  doing = this.taskRepo.gestStatus(TaskStatus.doing);
  done = this.taskRepo.gestStatus(TaskStatus.done);

 /* drop(event: CdkDragDrop<any>){
    const task = event.item.data;
    this.taskRepo.updateStatus(task.id, event.container.id)
  }
      no entiendo esta parte y porque no funciona  
  */

}
