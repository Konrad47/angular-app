import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Todo } from 'src/app/core/models/todo.model';
import { AddTodo } from 'src/app/core/stores/store-ngxs/todo/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  constructor(private store: Store) {}

  onAdd(todo: Todo) {
    this.store.dispatch(new AddTodo(todo));
  }
}
