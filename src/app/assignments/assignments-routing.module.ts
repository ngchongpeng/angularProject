import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: AssignmentsComponent },
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
  { path: 'task4', component: Task4Component },
  { path: 'task5', component: Task5Component },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
