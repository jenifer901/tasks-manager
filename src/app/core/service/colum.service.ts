import { Injectable, inject } from '@angular/core';
import { Column } from '../models/column.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private api = inject(ApiService);

  loadColumns(): Observable<Column[]> {
    return this.api.get('columns');
  }

  createColmun(column: Column): Observable<Column[]> {
    return this.api.post('columns', column);
  }
}
