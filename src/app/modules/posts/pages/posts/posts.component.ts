import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../../../../core/stores/store-ngrx/post/post.actions';
import { Observable, Subscription, tap } from 'rxjs';
import { AppStateInterface } from 'src/app/core/stores/store-ngrx/appState.interface';
import { Post, PostApi } from 'src/app/core/models/post.model';
import { SingleTon } from 'src/app/core/services/singleton.service';
import {
  isLoadingSelector,
  errorSelector,
  postsSelector,
  postSelector,
} from '../../../../core/stores/store-ngrx/post/post.selectors';
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
    this.posts$ = this.store.pipe(tap(console.log), select(postsSelector));
    this.post$ = this.store.pipe(select(postSelector));

    this.subscription = this.posts$.subscribe((posts) => {
      console.log('Posts:', posts);
    });
    // this.posts$.pipe(tap((posts) => console.log(posts))).subscribe();
  }

  deletePost(id: string) {
    console.log(id);
    this.store.dispatch(PostActions.deletePost({ id }));
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
    this.store.dispatch(PostActions.getPost({ id: '1' }));

    SingleTon.getInstance().getData();
    SingleTon.getInstance().setData('Hi from posts');
    SingleTon.getInstance().getData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
