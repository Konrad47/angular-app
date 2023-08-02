import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateInterface } from './auth.module';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'src/app/core/auth/authorization.service';
import { Login } from './auth.actions';
import { User } from 'src/app/core/models/authorization.model';
import { tap } from 'rxjs/operators';

export interface AuthStateModel {
  items: AuthStateInterface;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    items: {
      loggedUser: {
        firstName: '',
        token: '',
      },
    },
  },
})
@Injectable()
export class AuthState {
  constructor(private service: AuthorizationService) {}

  @Selector()
  static getToken(state: AuthStateModel) {
    return state.items.loggedUser.token;
  }

  @Action(Login)
  login({ getState, setState }: StateContext<AuthStateModel>, { user }: Login) {
    return this.service.loginUser(user).pipe(
      tap((result) => {
        const state = getState();
        setState({
          items: {
            ...state.items,
            loggedUser: {
              firstName: result.firstName,
              token: result.token,
            },
          },
        });
      })
    );
  }
}
