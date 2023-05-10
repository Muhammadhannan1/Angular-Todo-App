import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { TodosComponent } from './Components/todos/todos.component';
import { AboutComponent } from './Components/about/about.component';
const routes: Routes = [
  {path: '', component:TodosComponent},
  {path: 'about', component:AboutComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
