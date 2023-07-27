import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../shared/todo.model';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { TodoState } from 'src/app/store-ngxs/todo/todo.state';
import { EditTodo, GetTodo } from 'src/app/store-ngxs/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoId!: string;
  @Select(TodoState.getTodo) todo$!: Observable<Todo>;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.subscription = this.todo$.subscribe((todo) => {
      console.log('Todo:', todo);
    });
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.paramMap.get('id') as string;
    this.store.dispatch(new GetTodo(this.todoId));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEdit(todo: Todo) {
    this.store.dispatch(new EditTodo(todo, this.todoId));
  }
}
