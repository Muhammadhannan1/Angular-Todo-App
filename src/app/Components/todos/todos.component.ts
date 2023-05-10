import { Component } from '@angular/core';
import { Todo } from 'src/Interface/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

todos:Todo[]=[];
localItems : string|null;
constructor(){
this.localItems = localStorage.getItem("todos");
if(this.localItems == null){
  this.todos = [];
}
else{
  this.todos = JSON.parse(this.localItems);
}
}
addTodo(todo:Todo){
  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}

deleteTodo(todo:Todo){
  this.todos = this.todos.filter(t=>t !== todo)
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
  globalIndex!: number;

CheckTodoIndex(todo:Todo){
  let index = this.todos.indexOf(todo);
  this.globalIndex = index;
  console.log(this.globalIndex);
}
updateTodo(todo:Todo){
  this.todos[this.globalIndex].title = todo.title;
  this.todos[this.globalIndex].description = todo.description;
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
}
