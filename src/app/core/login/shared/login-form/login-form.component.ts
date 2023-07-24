import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/login/shared/authorization.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() onLogin: EventEmitter<User> = new EventEmitter();
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const post: User = {
      username: this.username,
      password: this.password,
      expiresInMins: 10,
    };

    if (this.username === '' || this.password === '') {
      alert('Please, fill in a form');
      return;
    }
    this.onLogin.emit(post);
    this.router.navigate(['']);
  }
}
