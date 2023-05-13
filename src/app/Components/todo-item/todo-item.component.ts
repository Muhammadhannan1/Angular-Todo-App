import { Component, Input,Output ,EventEmitter,ViewChild, OnInit } from '@angular/core';
import { Todo } from 'src/Interface/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
constructor(private fb : FormBuilder, private modalService: NgbModal){}
//@Input() Todo :Todo = {} as Todo;
@Input() Todo: Todo = { title: '', description: '',active: true};
@Output() TodoDelete : EventEmitter<Todo> = new EventEmitter();
@Output() TodoUpdate : EventEmitter<Todo> = new EventEmitter();
@Output() SendTodoUpdate : EventEmitter<Todo> = new EventEmitter();
todoDelete(todo:Todo){
  this.TodoDelete.emit(todo);
}
openModal(content:any) {
  this.modalService.open(content);
}

ReactiveForm!: FormGroup;

ngOnInit() {
  this.ReactiveForm = this.fb.group({
    Title: [this.Todo.title, [Validators.required, Validators.minLength(3)]],
    Description: [this.Todo.description, [Validators.required, Validators.minLength(4)]]
  });
}
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
