import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/posts/shared/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();
  title: string = '';
  body: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const post: Post = {
      title: this.title,
      body: this.body,
      userId: 5,
    };

    if (this.title === '' || this.body === '') {
      alert('Please, fill in a form');
      return;
    }
    this.onAddPost.emit(post);
    alert('Post added');
    this.router.navigate(['posts']);
  }
}
