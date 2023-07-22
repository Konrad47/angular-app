import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from './auth.module';
import * as AuthActions from './auth.actions';
export const initialState: AuthStateInterface = {
  isLoading: false,
  loggedUser: {
    firstName: '',
    token: '',
  },
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, { loggedUser }) => ({
    ...state,
    isLoading: false,
    loggedUser: loggedUser,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
  // on(AuthActions.getLoggedUser, (state) => ({
  //   ...state,
  //   loggedUser: {
  //     firstName: '',
  //     token: '',
  //   },
  // }))
);
