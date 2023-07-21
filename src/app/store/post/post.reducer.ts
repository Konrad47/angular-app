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
  post: {
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [],
    reactions: 0,
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

  on(PostActions.getPost, (state) => ({ ...state, isLoading: true })),
  on(PostActions.getPostSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    post: action.post,
  })),
  on(PostActions.getPostFailure, (state, action) => ({
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
  }),
  on(PostActions.editPostSuccess, (state, { post, id }) => {
    if (state.post.id === parseInt(id)) {
      return {
        ...state,
        post: {
          ...state.post,
          ...post,
        },
      };
    }
    return state;
  })
);
