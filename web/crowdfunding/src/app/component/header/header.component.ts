import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { getToken } from "codelyzer/angular/styles/cssLexer";
import { LOCALSTORAGE_TOKEN_NAME } from "../../../globals";
import { LogOutService } from "../../service/log-out.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string;

  constructor(
    private logOutService: LogOutService,
    private router: Router
  ) { }

  ngOnInit(
    token = localStorage.getItem('token')
  ) {
    this.token = token;
  }

  navigateAuth() {
    this.router.navigateByUrl("/auth")
  }

  navigateRegister() {
    this.router.navigateByUrl("/register")
  }

  logOut() {
    this.logOutService
      .logOut(this.token)
      .subscribe(
        () => {
          localStorage.removeItem('token');
          this.router.navigateByUrl("/main")
        },
        (error) => console.log("Ti down"),
      );
  }

  navigateCampaign() {
    this.router.navigateByUrl("/campaign/create")
  }
}
