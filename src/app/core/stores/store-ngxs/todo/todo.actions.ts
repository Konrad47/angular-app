import { Todo } from 'src/app/core/models/todo.model';

export class GetTodos {
  static readonly type = '[TODO] Get';
}

export class GetTodo {
  static readonly type = '[TODO] Get by id';

  constructor(public id: string) {}
}

export class AddTodo {
  static readonly type = '[TODO] Add';

  constructor(public payload: Todo) {}
}

export class EditTodo {
  static readonly type = '[TODO] Edit';

  constructor(public payload: Todo, public id: string) {}
}

export class DeleteTodo {
  static readonly type = '[TODO] Delete';

  constructor(public id: string) {}
}
