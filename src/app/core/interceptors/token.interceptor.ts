import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/store-ngxs/auth/auth.state';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.store.selectSnapshot(
          AuthState.getToken
        )}`,
      },
    });
    return next.handle(request);
  }
}
