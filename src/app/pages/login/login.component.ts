import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { User } from 'src/app/models/authorization';
import { login } from 'src/app/store/authorization/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private store: Store<AppStateInterface>) {}

  onLogin(user: User) {
    this.store.dispatch(login({ user }));
    //username: kminchelle
    //password: 0lelplR
  }
}
