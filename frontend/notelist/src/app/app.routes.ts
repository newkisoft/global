import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list';
import { AddEditFormComponent } from './components/add-edit-todo/add-edit-todo';

export const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todo',
    component: AddEditFormComponent
  },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'todos'
  }
];
