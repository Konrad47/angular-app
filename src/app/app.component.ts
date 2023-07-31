import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoggedUser } from './core/login/shared/authorization.model';
import { AppStateInterface } from './store/appState.interface';
import { Store, select } from '@ngrx/store';
import { loggedUserSelector } from './store/authorization/auth.selectors';
import * as AuthActions from '../app/store/authorization/auth.actions';
import { updateToken } from './app.config';
import { Select } from '@ngxs/store';
import { AuthState } from './store-ngxs/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  @Select(AuthState.getToken) token$!: Observable<string>;

  // loggedUser$: Observable<LoggedUser>;
  // private subscription: Subscription;

  // constructor(private store: Store<AppStateInterface>) {
  //   this.loggedUser$ = this.store.pipe(select(loggedUserSelector));

  //   this.subscription = this.token$.subscribe((loggedUser) => {
  //     console.log('User', loggedUser);
  //     updateToken(loggedUser);
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
