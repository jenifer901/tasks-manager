import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../core/service/task.service';
import { ColumnService } from '../../core/service/colum.service';
import { TaskStore } from '../../core/store/task.store';
import { ColumnStore } from '../../core/store/column.store';

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
  storeTask = inject(TaskStore);
  storeColumn = inject(ColumnStore);

  ngOnInit() {
    this.storeColumn.getColumns();
    this.storeTask.getTask();
  }
}
