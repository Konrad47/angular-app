import { createAction, props } from '@ngrx/store';
import { Post, PostApi } from 'src/app/models/Post';

export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: PostApi }>()
);
export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{ error: string }>()
);

export const getPost = createAction(
  '[Posts] Get Post',
  props<{ id: string }>()
);
export const getPostSuccess = createAction(
  '[Posts] Get Post success',
  props<{ post: Post }>()
);
export const getPostFailure = createAction(
  '[Posts] Get Post failure',
  props<{ error: string }>()
);

export const deletePost = createAction(
  '[Posts] Delete Post',
  props<{ id: string }>()
);