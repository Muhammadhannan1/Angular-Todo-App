import { Component, EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/Interface/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

ReactiveForm = this.fb.group({

   Title :  ['',[Validators.required,Validators.minLength(3)]],
   Description: ['',[Validators.required,Validators.minLength(4)]],
})
constructor( private fb : FormBuilder){}
isSubmitted = false;
@Output() TodoAdd : EventEmitter<Todo>= new EventEmitter();

OnSubmit = () =>{
  if(this.ReactiveForm.valid){
  const todo = {
    title : this.ReactiveForm.value.Title,
    description : this.ReactiveForm.value.Description,
    active:true
  }
  this.isSubmitted = true;
  this.TodoAdd.emit(todo);
}
}
}
