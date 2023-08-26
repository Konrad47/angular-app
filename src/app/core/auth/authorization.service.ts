import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, LoggedUser } from '../models/authorization.model';
import { Store } from '@ngxs/store';
import { AuthState } from '../stores/store-ngxs/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient, private store: Store) {}

  loginUser(user: User): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(this.apiUrl, user);
  }

  isAuthenticated(): boolean {
    const token = this.store.selectSnapshot(AuthState.getToken);
    let isAuth = false;
    if (token !== '') {
      isAuth = true;
    }
    return isAuth;
  }
}
