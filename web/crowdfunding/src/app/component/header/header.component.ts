import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LogOutService } from "../../service/log-out.service";
import { MeProviderService } from "../../service/me-provider.service";
import { AuthorizedUser } from "../../dto/AuthorizedUser";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: AuthorizedUser;

  constructor(
    private logOutService: LogOutService,
    private router: Router,
    private meProvider: MeProviderService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(
  ) {
    this.meProvider.user.subscribe(user => {
      this.user = user;
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
        this.user.token
      )
      .subscribe(
        () => {
          this.meProvider.setUnauthorized();
          this.router.navigateByUrl("/main")
        },
        error => {
          this.meProvider.setUnauthorized();
          return console.log("Ti down");
        }
      );
  }

  navigateCampaign() {
    this.router.navigateByUrl("/campaign/create")
  }

  findAll() {
    this.router.navigateByUrl("users");
  }
}
