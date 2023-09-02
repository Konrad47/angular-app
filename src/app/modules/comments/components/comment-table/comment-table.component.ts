import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css'],
})
export class CommentTableComponent {
  @Input() comments!: Comment[];
  @Output() onDeleteComment: EventEmitter<string> = new EventEmitter();

  get sortedComments(): Comment[] {
    const sortedComments = this.comments.slice();
    return sortedComments.sort((a, b) =>
      a.user.username.localeCompare(b.user.username)
    );
  }

  onDelete(id: string) {
    this.onDeleteComment.emit(id);
  }
}
