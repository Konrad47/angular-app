import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './post.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

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

  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.editPost),
      mergeMap((action: { post: Post; id: string }) => {
        const { id, post } = action;
        return this.postService.editPost(post, id).pipe(
          map(() => PostActions.editPostSuccess({ post, id })),
          catchError(() => of(PostActions.editPostFailure()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
