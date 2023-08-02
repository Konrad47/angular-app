import { createAction, props } from '@ngrx/store';
import { Post, PostApi } from 'src/app/core/models/post.model';

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

export const editPost = createAction(
  '[Posts] Edit Post',
  props<{ post: Post; id: string }>()
);
export const editPostSuccess = createAction(
  '[Posts] Edit Post Success',
  props<{ post: Post; id: string }>()
);
export const editPostFailure = createAction('[Posts] Edit Post Failure');

export const addPost = createAction(
  '[Posts] Add Post',
  props<{ post: Post }>()
);
export const addPostSuccess = createAction(
  '[Posts] Add Post Success',
  props<{ post: Post }>()
);
export const addPostFailure = createAction('[Posts] Add Post Failure');
