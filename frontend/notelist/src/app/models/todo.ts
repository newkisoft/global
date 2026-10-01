// src/app/models/todo-item.ts
export class Todo {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}