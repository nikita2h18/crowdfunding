import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../../service/registration.service";
import { Router } from "@angular/router";
import { RegisterUser } from "../../dto/RegisterUser";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  private registerUser: RegisterUser = new RegisterUser();

  constructor(
    private registerService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  public register = (): void => {
    this.registerService
      .register(this.registerUser)
      .subscribe(
        (): void => {
          this.router.navigateByUrl('/auth');
        },
      );
  };

  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' :
           this.password.hasError('password') ? 'Not a valid password' :
           '';

  }
}

