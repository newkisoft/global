import { Component, signal } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-todo-list',
  styleUrl: './todo-list.scss',
  templateUrl: './todo-list.html',
})
export class TodoListComponent {
  list = signal<Todo[]>([]);
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todoService.getAllTodos().subscribe({
      next: (todos) => {
        this.list.set(todos);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }



  toggleCompletion(todo: Todo): void {
    this.todoService
      .editTodo(todo.id, { ...todo, completed: !todo.completed })
      .subscribe({
        next: (updatedTodo: Todo) => {
          this.list.update(todos =>
            todos.map(t =>
              t.id === updatedTodo.id ? updatedTodo : t
            )
          );
        },
        error: (error) => {
          console.error('Error updating todo:', error);
        }
      });
  }
}
