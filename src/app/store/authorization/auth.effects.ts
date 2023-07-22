import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { User } from 'src/app/models/authorization';

@Injectable()
export class AuthEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action: { user: User }) => {
        const { user } = action;
        return this.authService.loginUser(user).pipe(
          map((loggedUser) => AuthActions.loginSuccess({ loggedUser })),
          catchError((error) =>
            of(AuthActions.loginFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthorizationService
  ) {}
}
