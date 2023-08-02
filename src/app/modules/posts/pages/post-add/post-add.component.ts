import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/core/models/post.model';
import { AppStateInterface } from 'src/app/core/stores/store-ngrx/appState.interface';
import { addPost } from 'src/app/core/stores/store-ngrx/post/post.actions';

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
