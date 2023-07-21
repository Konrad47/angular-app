import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from './post.module';
import * as PostActions from './post.actions';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: {
    limit: 0,
    posts: [],
    skip: 0,
    total: 0,
  },
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(PostActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
