import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoStateInterface } from './todo.module';
import { TodoApi } from 'src/app/core/todos/shared/todo.model';
import { AddTodo, DeleteTodo, GetTodos } from './todo.actions';
import { TodoService } from 'src/app/core/todos/shared/todo.service';
import { tap } from 'rxjs/operators';

export interface TodoStateModel {
  items: TodoStateInterface;
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: {
      todos: {
        limit: 0,
        todos: [],
        skip: 0,
        total: 0,
      },
      todo: {
        id: 0,
        todo: '',
        completed: false,
        userId: 0,
      },
      isDone: false,
    },
  },
})
@Injectable()
export class TodoState {
  constructor(private service: TodoService) {}

  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.items.todos;
  }

  @Selector()
  static getTodo(state: TodoStateModel) {
    return state.items.todo;
  }

  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<TodoStateModel>) {
    return this.service.getTodos().pipe(
      tap((result) => {
        const state = getState();
        setState({
          items: {
            ...state.items,
            todos: result,
          },
        });
      })
    );
  }

  @Action(AddTodo)
  addTodo(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: AddTodo
  ) {
    const state = getState();
    patchState({
      items: {
        ...state.items,
        todos: {
          ...state.items.todos,
          todos: [...state.items.todos.todos, payload],
        },
      },
    });
  }

  @Action(DeleteTodo)
  deleteTodo(
    { getState, patchState }: StateContext<TodoStateModel>,
    { id }: DeleteTodo
  ) {
    const state = getState();
    patchState({
      items: {
        ...state.items,
        todos: {
          ...state.items.todos,
          todos: state.items.todos.todos.filter(
            (todo) => todo.id !== parseInt(id)
          ),
        },
      },
    });
  }
}
