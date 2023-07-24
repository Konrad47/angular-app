import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoggedUser } from './models/authorization';
import { AppStateInterface } from './models/appState.interface';
import { Store, select } from '@ngrx/store';
import { loggedUserSelector } from './store/authorization/auth.selectors';
import * as AuthActions from '../app/store/authorization/auth.actions';
import { updateToken } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  loggedUser$: Observable<LoggedUser>;
  private subscription: Subscription;

  constructor(private store: Store<AppStateInterface>) {
    this.loggedUser$ = this.store.pipe(select(loggedUserSelector));

    this.subscription = this.loggedUser$.subscribe((loggedUser) => {
      console.log('User', loggedUser);
      updateToken(loggedUser.token);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
