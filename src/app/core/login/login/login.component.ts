import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
// import { Store } from '@ngrx/store';
// import { AppStateInterface } from 'src/app/store/appState.interface';
import { User } from 'src/app/core/login/shared/authorization.model';
import { Login } from 'src/app/store-ngxs/auth/auth.actions';
// import { login } from 'src/app/store/authorization/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // constructor(private store: Store<AppStateInterface>) {}
  constructor(private store: Store) {}
  onLogin(user: User) {
    this.store.dispatch(new Login(user));

    // this.store.dispatch(login({ user }));
    //username: kminchelle
    //password: 0lelplR
  }
}
