import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { RoutePaths } from 'src/app/models/routes.models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userIsLoggedIn: boolean = this.authService.isLoggedIn();
    const goToLoginPage = () => this.router.navigateByUrl(RoutePaths.Login);

    if (!userIsLoggedIn) goToLoginPage();

    return userIsLoggedIn;
  }

}
