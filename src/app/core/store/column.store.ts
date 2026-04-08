import { Injectable, signal, computed, inject } from '@angular/core';
import { Column } from '../models/column.model';
import { ColumnService } from '../service/colum.service';

/**
 * uso de signals
 * tipo de signal computed
 * estado reactivo
 */

@Injectable({
  providedIn: 'root',
})
export class ColumnStore {
  private columService = inject(ColumnService);
  private columnsSignal = signal<Column[]>([]);

  column = computed(() => this.columnsSignal());

  getColumns(): void {
    this.columService.loadColumns().subscribe((columns) => this.columnsSignal.set(columns));
  }

  addColumn(column: Column) {
    this.columService.createColmun(column).subscribe(() =>
      this.columnsSignal.update((columns) => {
        console.log([...columns, column]);
        return [...columns, column];
      }),
    );
  }

  /*getStatus(status: TaskStatus): Task[]{
    return this.tasksSignal().filter( task => task.status === status)
  }

  updateTask(task: Task) {
    this.tasksSignal.update((tasks) => tasks.map((t) => t.id === task.id ? task : t));
  }

  deleteTask(id: string) {
   this.tasksSignal.update((t) => t.filter( v => (v.id !== id)));
  }

*/
}
