import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
// import { TodoEditFormComponent } from '../shared/todo-edit-form/todo-edit-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoEditFormComponent } from '../../components/todo-edit-form/todo-edit-form.component';

@NgModule({
  declarations: [TodoComponent, TodoEditFormComponent],
  imports: [CommonModule, TodoRoutingModule, NgbModule, FormsModule],
})
export class TodoModule {}
