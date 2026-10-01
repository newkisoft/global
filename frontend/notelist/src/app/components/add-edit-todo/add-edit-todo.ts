import { Component, inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-edit-todo',  
  styleUrl: './add-edit-todo.scss',  
  templateUrl: './add-edit-todo.html',
})


export class AddEditFormComponent {



  private todoService = inject(TodoService);

  private route = inject(ActivatedRoute);

  todoId: number | null = null;

  isEditMode = false;

  todoItem: Todo = new Todo(0, '', false);



  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      const id = params.get('id');

      if (id) {

        this.todoId = Number(id);

        this.isEditMode = true;

        this.loadTodo(this.todoId);

      }

    });

  }



  private loadTodo(id: number): void {

    this.todoService.getTodo(id).subscribe({

      next: (todo: Todo) => {

        console.log(todo);

      },

      error: error => {

        console.error('Failed to load todo', error);

      }

    });

  }



  addTodo(todo: Todo): void {

    this.todoService.addTodo(todo).subscribe({

      next: result => {

        console.log('Todo added', result);

      },

      error: error => {

        console.error('Failed to add todo', error);

      }

    });

  }



  editTodo(todo: Todo): void {

    this.todoService.editTodo(todo.id, todo).subscribe({

      next: result => {

        console.log('Todo updated', result);

      },

      error: error => {

        console.error('Failed to update todo', error);

      }

    });

  }



  SaveTodo(todo: Todo): void {

    if (this.isEditMode && this.todoId !== null) {

      this.editTodo(todo);

    } else {

      this.addTodo(todo);

    }

  }

} 