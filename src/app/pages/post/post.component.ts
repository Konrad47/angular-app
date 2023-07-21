import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { AppStateInterface } from 'src/app/models/appState.interface';
import * as PostActions from '../../store/post/post.actions';
import { postSelector } from 'src/app/store/post/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  postId!: string;
  post$!: Observable<Post>;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) {
    this.post$ = this.store.pipe(select(postSelector));

    this.subscription = this.post$.subscribe((post) => {
      console.log('Post:', post);
    });
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id') as string;
    this.store.dispatch(PostActions.getPost({ id: this.postId }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
