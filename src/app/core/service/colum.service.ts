import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Column } from '../models/column.model';
import { ApiService } from './api.service';
import { ColumnStore } from '../store/column.store';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private api = inject(ApiService);

  loadColumns(): Observable<Column[]> {
    return this.api.get('columns');
  }

  createColmun(column: Column): Observable<Column[]> {
    console.log('jhkjkhkjh');
    return this.api.post('columns', column);
  }
}
