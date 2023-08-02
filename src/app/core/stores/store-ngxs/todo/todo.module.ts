import { TodoApi, Todo } from 'src/app/core/models/todo.model';

export interface TodoStateInterface {
  todos: TodoApi;
  todo: Todo;
  isDone: boolean;
}
