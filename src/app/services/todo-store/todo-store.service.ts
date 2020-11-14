import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/models/todo/todo-model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {

  todoList: TodoModel[] = [];

  constructor() { }

  getAllTodo(): TodoModel[]{
    return this.todoList;
  }

  addTodo(title: string, content: string): TodoModel[] {
    this.todoList.push(new TodoModel(uuidv4(), title, content));
    return this.todoList;
  }

  delete(id): TodoModel[]{
    this.todoList = this.todoList.filter(t=> t.id !== id);
    return this.todoList;
  }
}
