import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../../store/post/post.actions';
import { Observable, Subscription } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  postSelector,
  postsSelector,
} from 'src/app/store/post/post.selectors';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { Post, PostApi } from 'src/app/models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostApi>;
  post$: Observable<Post>;
  private subscription: Subscription;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
    this.post$ = this.store.pipe(select(postSelector));

    this.subscription = this.post$.subscribe((posts) => {
      console.log('Posts:', posts);
    });
  }

  deletePost(id: string) {
    console.log(id);
    this.store.dispatch(PostActions.deletePost({ id }));
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
    this.store.dispatch(PostActions.getPost({ id: '1' }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
