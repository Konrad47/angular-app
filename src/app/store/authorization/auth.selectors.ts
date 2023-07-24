import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.auth;

export const isLoadingUserSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const loggedUserSelector = createSelector(
  selectFeature,
  (state) => state.loggedUser
);

export const errorUserSelector = createSelector(
  selectFeature,
  (state) => state.error
);
