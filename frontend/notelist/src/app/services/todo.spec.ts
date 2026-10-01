import { TestBed } from '@angular/core/testing';
import { Todo } from '../models/todo';

describe('Todo Model', () => {
  it('should create an instance', () => {
    const todo = new Todo(1, 'Test Todo', false);
    
    expect(todo).toBeTruthy();
    expect(todo.id).toBe(1);
    expect(todo.title).toBe('Test Todo');
    expect(todo.completed).toBe(false);
  });
});