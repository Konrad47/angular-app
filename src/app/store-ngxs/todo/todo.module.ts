import { TodoApi, Todo } from 'src/app/core/todos/shared/todo.model';

export interface TodoStateInterface {
  todos: TodoApi;
  todo: Todo;
  isDone: boolean;
}
