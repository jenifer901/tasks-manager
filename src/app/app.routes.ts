import { Routes } from '@angular/router';
import { AppLayout } from './layout/app-layout/app-layout';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./domain/login/login').then((m) => m.Login),
  },
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./domain/dasboard/dasboard').then((m) => m.Dasboard),
      },
      {
        path: 'tasks', 
        loadComponent: () =>
          import('./domain/tasks/kanban-board/kanban-board').then((m) => m.KanbanBoard),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
