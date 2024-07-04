import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { TodoListRoutingModule } from './todo-list-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatSnackBarModule
  ]
})
export class TodoListModule { }
