import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/stores/store-ngrx/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts
);

export const postSelector = createSelector(
  selectFeature,
  (state) => state.post
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
