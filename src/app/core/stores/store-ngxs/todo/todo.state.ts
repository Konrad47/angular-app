import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoStateInterface } from './todo.module';
import { TodoApi } from 'src/app/core/models/todo.model';
import {
  AddTodo,
  DeleteTodo,
  EditTodo,
  GetTodo,
  GetTodos,
} from './todo.actions';
import { TodoService } from 'src/app/core/services/todo.service';
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

  @Action(GetTodo)
  getTodo(
    { getState, setState }: StateContext<TodoStateModel>,
    { id }: GetTodo
  ) {
    return this.service.getTodo(id).pipe(
      tap((result) => {
        const state = getState();
        setState({
          items: {
            ...state.items,
            todo: result,
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
    return this.service.addTodo(payload).pipe(
      tap((result) => {
        const state = getState();
        patchState({
          items: {
            ...state.items,
            todos: {
              ...state.items.todos,
              todos: [...state.items.todos.todos, result],
            },
          },
        });
      })
    );
  }

  @Action(EditTodo)
  editTodo(
    { getState, setState }: StateContext<TodoStateModel>,
    { payload, id }: EditTodo
  ) {
    return this.service.editTodo(payload, id).pipe(
      tap((result) => {
        const state = getState();
        const todoList = [...state.items.todos.todos];
        const todoIndex = todoList.findIndex(
          (item) => item.id === parseInt(id)
        );
        todoList[todoIndex] = result;
        setState({
          items: {
            ...state.items,
            todos: {
              ...state.items.todos,
              todos: todoList,
            },
          },
        });
      })
    );
  }

  @Action(DeleteTodo)
  deleteTodo(
    { getState, patchState }: StateContext<TodoStateModel>,
    { id }: DeleteTodo
  ) {
    return this.service.deleteTodo(id).pipe(
      tap(() => {
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
      })
    );
  }
}
