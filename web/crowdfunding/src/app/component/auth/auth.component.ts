import { Component, OnInit } from '@angular/core';
import { RegisterUser } from "../../dto/RegisterUser";
import { AuthUser } from "../../dto/AuthUser";
import { Router } from "@angular/router";
import { RegistrationService } from "../../service/registration.service";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private authUser: AuthUser = new AuthUser();

  constructor(
    private authService: AuthService,
    private router: Router
) { }

  ngOnInit() {
  }

  public auth = (): void => {
    this.authService
      .auth(this.authUser)
      .subscribe(
        (): void => {
          this.router.navigateByUrl('/auth');
        },
      );
  }
}
