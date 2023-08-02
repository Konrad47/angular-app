import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css'],
})
export class PostTableComponent {
  @Input() posts!: Post[];
  @Output() onDeletePost: EventEmitter<string> = new EventEmitter();

  get sortedPosts(): Post[] {
    const sortedPosts = this.posts.slice();
    return sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
  }

  onDelete(id: string) {
    this.onDeletePost.emit(id);
  }
}
