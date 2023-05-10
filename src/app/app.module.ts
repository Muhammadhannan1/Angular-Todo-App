import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
