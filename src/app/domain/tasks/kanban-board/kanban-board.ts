import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ColumnTask } from '../components/column/column';
import { ColumnStore } from '../../../core/store/column.store';
import { AuthService } from '../../../core/service/auth.service';
import { Column } from '../../../core/models/column.model';
//import { CdkDragDrop } from '@angular/cdk/drag-drop';

/**
 * Uso de inject, en este caso usamos inject y no el constructor.
 * Esta más recomendados en las APIs modernas de Angular y para componentes Standalone.
 */

@Component({
  selector: 'app-kanban-board',
  imports: [ReactiveFormsModule, ColumnTask],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css',
  standalone: true,
})
export class KanbanBoard {
  storeColumns = inject(ColumnStore);
  private fb = inject(FormBuilder);
  user = inject(AuthService);

  isAddingColumn = false; 

   form = this.fb.nonNullable.group({
      title: ['', [Validators.required]],
      id: null
    })

    get columns(): Column[]{
      return this.storeColumns.column()
    }

  openColumEditor(){
    this.form.controls.title.setValue('');
    this.isAddingColumn = true;
  }

  addColum(){
  if(this.form.valid){
       this.storeColumns.addColumn({
      id: 't5',
      title: this.form.controls.title.value,
      order: this.columns.length + 1
    } as Column)
    this.isAddingColumn = false;
    this.form.markAsUntouched();
    }
    else{
      this.form.markAllAsTouched();
    }
   
  }

  cancelColum(){
this.isAddingColumn = false;
  }
}
