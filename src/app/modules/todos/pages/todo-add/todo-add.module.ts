import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddRoutingModule } from './todo-add-routing.module';
import { TodoAddComponent } from './todo-add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';

@NgModule({
  declarations: [TodoAddComponent, TodoFormComponent],
  imports: [CommonModule, TodoAddRoutingModule, NgbModule, FormsModule],
})
export class TodoAddModule {}
