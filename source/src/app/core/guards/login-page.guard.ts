import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { RoutePaths } from 'src/app/models/routes.models';


@Injectable({
  providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userIsAlreadyLoggedIn: boolean = this.authService.isLoggedIn();
    const goToHomepage = () => this.router.navigateByUrl(RoutePaths.Home);

    if (userIsAlreadyLoggedIn) goToHomepage();

    return !userIsAlreadyLoggedIn;
  }

}
