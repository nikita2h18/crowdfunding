import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { getToken } from "codelyzer/angular/styles/cssLexer";
import { LOCALSTORAGE_TOKEN_NAME } from "../../../globals";
import { LogOutService } from "../../service/log-out.service";
import { TokenProviderService } from "../../service/token-provider.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string;

  constructor(
    private logOutService: LogOutService,
    private router: Router,
    private tokenProvider: TokenProviderService
  ) {
  }

  ngOnInit(
  ) {
    this.tokenProvider.token.subscribe(t => {
      this.token = t;
    });
  }

  navigateAuth() {
    this.router.navigateByUrl("/auth")
  }

  navigateRegister() {
    this.router.navigateByUrl("/register")
  }

  logOut() {
    this.logOutService
      .logOut(
        this.token
      )
      .subscribe(
        () => {
          this.tokenProvider.setUnauthorized();
          this.router.navigateByUrl("/main")
        },
        (error) => {
          this.tokenProvider.setUnauthorized();
          return console.log("Ti down");
        }
      );
  }

  navigateCampaign() {
    this.router.navigateByUrl("/campaign/create")
  }
}
