import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedUser, User } from 'src/app/models/app.models';
import { findUser, getLoggedUserFromUser } from 'src/app/shared/utils/functions';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/models/routes.models';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _loggedIn: BehaviorSubject<boolean>;
  public readonly loggedIn: Observable<boolean>;

  private _user: BehaviorSubject<LoggedUser | undefined>;
  public user: Observable<LoggedUser | undefined>;

  constructor(private messageService: MessageService, private router: Router) {
    this._loggedIn = new BehaviorSubject<boolean>(false);
    this.loggedIn = this._loggedIn.asObservable();

    this._user = new BehaviorSubject<LoggedUser | undefined>(undefined);
    this.user = this._user.asObservable();
  }

  public getLoggedUser(): LoggedUser | undefined {
    return this._user.getValue();
  }

  public isLoggedIn(): boolean {
    return this._loggedIn.getValue();
  }

  public logIn(username: string, password: string): boolean {
    const user: User | undefined = findUser(username, password);

    if (user) {
      const loggedUser: LoggedUser = getLoggedUserFromUser(user);

      this._user.next(loggedUser);
      this._loggedIn.next(true);

      this.messageService.add({
        severity: 'info',
        summary: `Benvenut${user.sex === 'M' ? 'o' : 'a'} ${username}!`
      });

      this.router.navigateByUrl(RoutePaths.Home);
    }
    else {
      this.messageService.add({
        severity: 'error',
        summary: 'Errore',
        detail: 'Credenziali errate'
      });
    }

    return this.isLoggedIn();
  }

  public logOut(): void {
    this._user.next(undefined);
    this._loggedIn.next(false);

    this.router.navigateByUrl(RoutePaths.Login);
  }

}
