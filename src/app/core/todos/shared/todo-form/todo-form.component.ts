import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  todo: string = '';

  constructor(private router: Router) {}
  onSubmit() {
    const todo: Todo = {
      todo: this.todo,
      userId: 5,
      completed: true,
    };

    if (this.todo === '') {
      alert('Please, fill in a form');
      return;
    }
    this.onAddTodo.emit(todo);
    alert('Todo added');
    this.router.navigate(['todos']);
  }
}
