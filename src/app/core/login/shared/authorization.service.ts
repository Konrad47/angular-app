import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedUser, User } from './authorization.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  loginUser(user: User): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(this.apiUrl, user);
  }
}
