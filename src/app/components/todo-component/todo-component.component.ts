import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo/todo-model';
import { TodoStoreService } from 'src/app/services/todo-store/todo-store.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  name: string='';
  content: string='';
  todoList: TodoModel[] = [];
  constructor(private todoService: TodoStoreService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getAllTodo();
  }
  addBtnDisabled(): boolean{
    if(this.name.length==0 || this.content.length==0)
    return true;
    return false;
  }

  addTodo(){
    this.todoList = this.todoService.addTodo(this.name, this.content);
    this.name = '';
    this.content = '';
  }
  delete(id){
    this.todoList = this.todoService.delete(id);
  }

}
