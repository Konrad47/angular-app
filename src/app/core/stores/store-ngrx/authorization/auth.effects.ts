import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { User } from 'src/app/core/models/authorization.model';
import { AuthorizationService } from 'src/app/core/auth/authorization.service';

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
