import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comment-edit-form',
  templateUrl: './comment-edit-form.component.html',
  styleUrls: ['./comment-edit-form.component.css'],
})
export class CommentEditFormComponent {
  @Output() onEditComment: EventEmitter<Comment> = new EventEmitter();
  @Input() comment!: Comment;

  constructor() {}

  onSubmit() {
    const edtComment: Comment = {
      user: {
        username: this.comment.user.username,
      },
      body: this.comment.body,
    };
    if (this.comment.user.username === '' || this.comment.body === '') {
      alert('Please, fill in a form');
      return;
    }

    this.onEditComment.emit(edtComment);
    alert('Product edited');
  }
}
