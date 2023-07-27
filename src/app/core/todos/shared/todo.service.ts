import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getHttpOptions } from '../../../app.config';
import { TodoApi, Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoApi> {
    return this.http.get<TodoApi>(this.apiUrl, getHttpOptions());
  }

  getTodo(id: string): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Todo>(url, getHttpOptions());
  }

  deleteTodo(id: string): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Todo>(url, getHttpOptions());
  }

  addTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Todo>(url, todo, getHttpOptions());
  }

  editTodo(todo: Todo, id: string): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Todo>(url, todo, getHttpOptions());
  }
}
