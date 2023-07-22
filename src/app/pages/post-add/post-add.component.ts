import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/Post';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { addPost } from 'src/app/store/post/post.actions';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent {
  constructor(private store: Store<AppStateInterface>) {}

  onAdd(post: Post) {
    console.log(post);
    this.store.dispatch(addPost({ post }));
  }
}
