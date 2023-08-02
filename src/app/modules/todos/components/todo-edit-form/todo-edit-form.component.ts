import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-todo-edit-form',
  templateUrl: './todo-edit-form.component.html',
  styleUrls: ['./todo-edit-form.component.css'],
})
export class TodoEditFormComponent {
  @Output() onEditTodo: EventEmitter<Todo> = new EventEmitter();
  @Input() todo!: Todo;
  editedTodo!: Todo;
  constructor() {}

  ngOnChanges() {
    this.editedTodo = {
      todo: this.todo.todo,
      completed: this.todo.completed,
      userId: this.todo.userId,
    };
  }

  onSubmit() {
    if (this.editedTodo.todo === '') {
      alert('Please, fill in a form');
      return;
    }

    this.onEditTodo.emit(this.editedTodo);
    alert('Todo edited');
  }
}
