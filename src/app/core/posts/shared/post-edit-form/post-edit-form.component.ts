import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/posts/shared/post.model';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css'],
})
export class PostEditFormComponent {
  @Output() onEditPost: EventEmitter<Post> = new EventEmitter();
  @Input() post!: Post;
  editedPost!: Post;
  constructor(private router: Router) {}

  ngOnChanges() {
    this.editedPost = { ...this.post };
  }

  onSubmit() {
    if (this.editedPost.title === '' || this.editedPost.body === '') {
      alert('Please, fill in a form');
      return;
    }

    this.onEditPost.emit(this.editedPost);
    alert('Post edited');
    // this.router.navigate(['products']);
  }
}
