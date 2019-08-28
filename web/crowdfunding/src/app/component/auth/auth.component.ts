import { Component, OnInit } from '@angular/core';
import { AuthUser } from "../../dto/AuthUser";
import { Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";
import { LOCALSTORAGE_TOKEN_NAME } from "../../../globals";
import { TokenProviderService } from "../../service/token-provider.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private authUser: AuthUser = new AuthUser();

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
      localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, token);

      this.router.navigate(['/main'], {replaceUrl: true});
    });
  }
}
