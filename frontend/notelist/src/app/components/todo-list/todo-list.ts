import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-todo-list',
  styleUrl: './todo-list.scss',
  templateUrl: './todo-list.html',
})
export class TodoListComponent {
  list:Todo[] = [];
  constructor(private todoservice: TodoService) {}
  ngOnInit() {
    this.list = [
      new Todo(1, 'Buy groceries', false),
      new Todo(2, 'Clean the house', true),
      new Todo(3, 'Finish the project', false),
    ];
    console.log('Todo List:', this.list);
  }

  getAllTodos(): Todo[] {
    return this.list;
  }

  toggleCompletion(todo: Todo): void {
    this.todoservice.editTodo(todo.id, { ...todo, completed: !todo.completed }).subscribe({
      next: (updatedTodo: Todo) => {
        const index = this.list.findIndex(t => t.id === updatedTodo.id);
        if (index !== -1) {
          this.list[index] = updatedTodo;
        }
      },
      error: (error) => {
        console.error('Error updating todo:', error);
      }
    });
  }
}
