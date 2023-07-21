import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from './post.module';
import * as PostActions from './post.actions';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: {
    limit: 30,
    posts: [],
    skip: 0,
    total: 150,
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
  })),
  on(PostActions.deletePost, (state, { id }) => {
    const updatedPosts = state.posts.posts.filter(
      (post) => post.id !== parseInt(id)
    );
    return {
      ...state,
      posts: {
        posts: updatedPosts,
        limit: state.posts.limit,
        skip: state.posts.skip,
        total: state.posts.total,
      },
    };
  })
);
