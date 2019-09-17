import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LOCALSTORAGE_TOKEN_NAME } from '../../../globals';
import { FormControl, Validators } from '@angular/forms';
import { UserCredentials } from '../../dto/UserCredentials';
import { MeProviderService } from '../../service/me-provider.service';
import { AuthorizedUser } from '../../dto/AuthorizedUser';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private authUser: UserCredentials = new UserCredentials();

  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private meProviderService: MeProviderService,
  ) { }

  ngOnInit() {
  }

  auth() {
    this.authService.auth(this.authUser).subscribe(user => {
      this.meProviderService.setUser(user);
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
