import { createAction, props } from '@ngrx/store';
import { LoggedUser, User } from 'src/app/models/authorization';

export const login = createAction('[Auth] Login', props<{ user: User }>());

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ loggedUser: LoggedUser }>()
);

export const loginFailure = createAction(
  '[Auth] Login failure',
  props<{ error: string }>()
);
