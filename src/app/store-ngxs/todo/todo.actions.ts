import { Todo } from 'src/app/core/todos/shared/todo.model';

export class AddTodo {
  static readonly type = '[TODO] Add';

  constructor(public payload: Todo) {}
}

export class DeleteTodo {
  static readonly type = '[TODO] Delete';

  constructor(public payload: string) {}
}
