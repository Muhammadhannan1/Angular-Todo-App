import { Component, Input,Output ,EventEmitter,ViewChild } from '@angular/core';
import { Todo } from 'src/Interface/todo';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
constructor(private fb : FormBuilder, private modalService: NgbModal){}
@Input() Todo :Todo = {} as Todo;
@Output() TodoDelete : EventEmitter<Todo> = new EventEmitter();
@Output() TodoUpdate : EventEmitter<Todo> = new EventEmitter();
@Output() SendTodoUpdate : EventEmitter<Todo> = new EventEmitter();
todoDelete(todo:Todo){
  this.TodoDelete.emit(todo);
}
openModal(content:any) {
  this.modalService.open(content);
}

ReactiveForm = this.fb.group({
  Title:['',[Validators.required,Validators.minLength(3)]],
  Description:['',[Validators.required,Validators.minLength(4)]]
})

isSubmitted = false;

sendTodoUpdate(todo:Todo){
  this.SendTodoUpdate.emit(todo);
}

OnUpdate(todo:Todo){
  if(this.ReactiveForm.valid){
    const todo = {
      title : this.ReactiveForm.value.Title,
      description : this.ReactiveForm.value.Description,
      active:true
    }
    this.isSubmitted = true;
  this.TodoUpdate.emit(todo);
}
}
}
