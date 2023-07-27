import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoTableComponent } from '../shared/todo-table/todo-table.component';

@NgModule({
  declarations: [TodosComponent, TodoTableComponent],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
