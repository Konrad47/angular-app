import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { TodoState } from 'src/app/core/stores/store-ngxs/todo/todo.state';
import { TodoApi } from '../../../../core/models/todo.model';
import {
  DeleteTodo,
  GetTodos,
} from 'src/app/core/stores/store-ngxs/todo/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Select(TodoState.getTodos) todos$!: Observable<TodoApi>;
  private subscription: Subscription;

  constructor(private store: Store) {
    this.subscription = this.todos$.subscribe((todos) => {
      console.log('Todos:', todos);
    });
  }

  deleteTodo(id: string) {
    this.store.dispatch(new DeleteTodo(id));
  }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
