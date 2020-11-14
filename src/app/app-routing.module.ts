import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponentComponent } from './components/cv-component/cv-component.component';
import { TodoComponentComponent } from './components/todo-component/todo-component.component';

const routes: Routes = [
  {
    path:'cv',
    component: CvComponentComponent
  },
  {
    path:'todo',
    component: TodoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
