import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoStateInterface } from './todo.module';
import { TodoApi } from 'src/app/core/todos/shared/todo.model';
import { AddTodo, DeleteTodo } from './todo.actions';

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
  @Selector()
  static getTodos(state: TodoApi) {
    return state.todos;
  }

  @Action(AddTodo)
  add(
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
  delete(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: DeleteTodo
  ) {
    const state = getState();
    patchState({
      items: {
        ...state.items,
        todos: {
          ...state.items.todos,
          todos: state.items.todos.todos.filter(
            (todo) => todo.id !== parseInt(payload)
          ),
        },
      },
    });
  }
}
