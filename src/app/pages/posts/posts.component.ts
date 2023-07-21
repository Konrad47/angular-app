import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../../store/post/post.actions';
import { Observable, Subscription } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  postSelector,
} from 'src/app/store/post/post.selectors';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { PostApi } from 'src/app/models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostApi>;
  private subscription: Subscription;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postSelector));

    this.subscription = this.posts$.subscribe((posts) => {
      console.log('Posts:', posts.posts);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
