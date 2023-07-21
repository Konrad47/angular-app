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

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Posts] Delete Post'),
      mergeMap((action: { id: string }) => {
        const { id } = action;
        return this.postService.deletePost(id).pipe(
          map(() => PostActions.deletePostSuccess()),
          catchError((error) =>
            of(PostActions.deletePostFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
