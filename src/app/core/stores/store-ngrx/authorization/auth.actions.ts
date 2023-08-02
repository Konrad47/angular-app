import { createAction, props } from '@ngrx/store';
import { LoggedUser, User } from 'src/app/core/models/authorization.model';

export const login = createAction('[Auth] Login', props<{ user: User }>());

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ loggedUser: LoggedUser }>()
);

export const loginFailure = createAction(
  '[Auth] Login failure',
  props<{ error: string }>()
);
