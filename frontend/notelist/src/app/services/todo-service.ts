import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Service()
export class TodoService {

  private http = inject(HttpClient);

  private apiUrl = '/api/Todo';
 

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  addTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  editTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, todo);
  }
  
  getAllTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.apiUrl}/`);
  }
}