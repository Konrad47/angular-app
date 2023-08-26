import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  mapToCanActivate,
} from '@angular/router';
import { AuthorizationService } from '../auth/authorization.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const isToken = this.authService.isAuthenticated();

    const isPathLogin = state.url.includes('/login');
    if (isToken) {
      if (isPathLogin) {
        this.router.navigate(['']);
      } else return true;
    } else if (!isPathLogin) {
      this.router.navigate(['/login']);
    } else return true;

    return isToken;
  }
}
