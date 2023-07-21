import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './post.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map((posts) => PostActions.getPostsSuccess({ posts })),
          catchError((error) =>
            of(PostActions.getPostsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPost),
      mergeMap((action: { id: string }) => {
        const { id } = action;
        return this.postService.getPost(id).pipe(
          map((post) => PostActions.getPostSuccess({ post })),
          catchError((error) =>
            of(PostActions.getPostsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap((action: { id: string }) => {
        const { id } = action;
        return this.postService.deletePost(id).pipe(
          map(() => ({ type: '[Posts] Delete Post success' })),
          catchError(() => of({ type: '[Posts] Delete Post Failure' }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
