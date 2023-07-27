import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { TodoState } from 'src/app/store-ngxs/todo/todo.state';
import { TodoApi } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Select(TodoState.getTodos) todos$!: Observable<TodoApi>;
  // todos$: Observable<TodoApi>;
  // private subscription: Subscription;

  constructor(private store: Store) {
    // this.todos$ = this.store.select((state) => state.items.todos);
    // this.subscription = this.todos$.subscribe((todos) => {
    //   console.log('Todos:', todos);
    // });
  }

  ngOnInit() {
    // this.todos$.pipe(tap((posts) => console.log(posts))).subscribe();
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
