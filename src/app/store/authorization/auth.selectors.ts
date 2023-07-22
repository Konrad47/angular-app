import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/models/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.auth;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const loggedUserSelector = createSelector(
  selectFeature,
  (state) => state.loggedUser
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
