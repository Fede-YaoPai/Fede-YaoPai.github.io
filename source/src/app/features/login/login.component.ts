import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public readonly controlNames;

  public loginForm: FormGroup;
  public loadingButton: boolean;

  constructor(private authService: AuthenticationService) {
    this.controlNames = {
      username: 'username',
      password: 'password'
    };

    this.loginForm = new FormGroup({
      [this.controlNames.username]: new FormControl('', [Validators.required]),
      [this.controlNames.password]: new FormControl('', [Validators.required])
    });

    this.loadingButton = false;
  }

  public login(): void {
    if (this.loginForm.valid) {
      const username: string = this.loginForm.controls[this.controlNames.username].value;
      const password: string = this.loginForm.controls[this.controlNames.password].value;

      if (username && password) {
        this.loadingButton = true;

        setTimeout(() => {
          const success: boolean = this.authService.logIn(username, password);

          if (!success) {
            this.loginForm.controls[this.controlNames.password].reset();
          }

          this.loadingButton = false;
        }, 500);
      }
    }
  }

}
