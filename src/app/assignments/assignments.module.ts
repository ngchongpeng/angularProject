import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { Task1ChildComponent } from './task1/task1-child/task1-child.component';
import { CustomIterateDirective } from '../_directives/custom-iterate.directive';
import { Task4Child1Component } from './task4/task4-child1/task4-child1.component';
import { Task4Child2Component } from './task4/task4-child2/task4-child2.component';
import { Task5OutputComponent } from './task5/task5-output/task5-output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AllUsersComponent } from './users/all-users/all-users.component';


@NgModule({
  declarations: [
    AddUserComponent,
    AllUsersComponent,
    AssignmentsComponent,
    CustomIterateDirective,
    Task1ChildComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Child1Component,
    Task4Child2Component,
    Task4Component,
    Task5Component,
    Task5OutputComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AssignmentsModule { }

