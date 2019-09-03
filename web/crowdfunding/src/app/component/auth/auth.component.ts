import { Component, OnInit } from '@angular/core';
import { AuthUser } from "../../dto/AuthUser";
import { Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";
import { LOCALSTORAGE_TOKEN_NAME } from "../../../globals";
import { TokenProviderService } from "../../service/token-provider.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private authUser: AuthUser = new AuthUser();

  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenProviderService: TokenProviderService
  ) { }

  ngOnInit() {
  }

  auth() {
    this.authService.auth(this.authUser).subscribe(token => {
      this.tokenProviderService.setToken(token);

      this.router.navigate(['/main'], {replaceUrl: true});
    });
  }

  getLoginErrorMessage() {
    return this.login.hasError('required')
           ? 'You must enter a login'
           :
           '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required')
           ? 'You must enter a password'
           :
           'Not a valid password';
  }
}
