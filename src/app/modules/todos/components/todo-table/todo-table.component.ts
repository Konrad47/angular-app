import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent {
  @Input() todos!: Todo[];
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter();

  get sortedTodos(): Todo[] {
    const sortedPosts = this.todos.slice();
    return sortedPosts.sort((a, b) => a.todo.localeCompare(b.todo));
  }

  onDelete(id: string) {
    this.onDeleteTodo.emit(id);
  }
}
