export interface TodoApi {
  limit: number;
  todos: Todo[];
  skip: number;
  total: number;
}

export interface Todo {
  id?: number;
  todo: string;
  completed: boolean;
  userId: number;
}
