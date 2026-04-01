import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../../../core/models/task.model';
import { Column } from '../../../../core/models/column.model';
import { TaskStore } from '../../../../core/store/task.store';
import { ColumnStore } from '../../../../core/store/column.store';
import { CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column-task',
  imports: [ReactiveFormsModule, TaskCard, DragDropModule],
  templateUrl: './column.html',
  styleUrl: './column.css',
})
export class ColumnTask {
  @Input({ required: true })
  column!: Column;

  isAddingTask = false;

  private fb = inject(FormBuilder);
  storeTasks = inject(TaskStore);
  storeColumns = inject(ColumnStore);

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    description: '',
    id: null,
  });

  get tasks(): Task[] {
    return this.storeTasks.task().filter((t) => t.colum === this.column.id);
  }

  drop(event: CdkDragDrop<any>){
    const task = event.item.data
    if(task){
      const newColumnId = this.column.id
      const newIndex = event.currentIndex

      this.storeTasks.moveTask(
        task.id,
        newColumnId,
        newIndex
      )
    }
  }

  openTaskEditor() {
    this.form.controls.title.setValue('');
    this.isAddingTask = true;
  }

  addTask() {
    if (this.form.valid) {
      this.storeTasks.addTask({
        title: this.form.controls.title.value,
        description: this.form.controls.description.value,
        colum: this.column.id,
      } as Task);
      this.isAddingTask = false;
      this.form.markAsUntouched();
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancelTask() {
    this.isAddingTask = false;
  }
}
