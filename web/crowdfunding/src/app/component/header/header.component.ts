import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutService } from '../../service/log-out.service';
import { MeProviderService } from '../../service/me-provider.service';
import { AuthorizedUser } from '../../dto/AuthorizedUser';
import { AuthService } from '../../service/auth.service';

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
    this.user.token = this.meProvider.getUserToken();
    this.user.role = this.meProvider.getUserRole();
  }

  navigateAuth() {
    this.router.navigateByUrl('/auth');
  }

  navigateRegister() {
    this.router.navigateByUrl('/register');
  }

  logOut() {
    this.logOutService
      .logOut(
        this.user.token
      )
      .subscribe(
        () => {
          this.meProvider.setUnauthorized();
          this.router.navigateByUrl('/campaign/all');
        },
        error => {
          this.meProvider.setUnauthorized();
          return console.log('Ti down');
        }
      );
  }

  navigateCreateCampaign() {
    this.router.navigateByUrl('/campaign/create');
  }

  findAll() {
    this.router.navigateByUrl('users');
  }

  navigateCampaign() {
    this.router.navigateByUrl('/campaign/all');
  }

  navigateUserCampaigns() {
    this.router.navigateByUrl('/campaign/user');
  }
}
