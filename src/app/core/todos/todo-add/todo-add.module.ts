import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddRoutingModule } from './todo-add-routing.module';
import { TodoAddComponent } from './todo-add.component';
import { TodoFormComponent } from '../shared/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TodoAddComponent, TodoFormComponent],
  imports: [CommonModule, TodoAddRoutingModule, NgbModule, FormsModule],
})
export class TodoAddModule {}
