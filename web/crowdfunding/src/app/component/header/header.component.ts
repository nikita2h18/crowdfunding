import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { getToken } from "codelyzer/angular/styles/cssLexer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(
    token = localStorage.getItem('token')
  ) {
  }

  navigateAuth() {
    this.router.navigateByUrl("/auth")
  }

  navigateRegister() {
    this.router.navigateByUrl("/register")
  }

  logOut() {
    this.router.navigateByUrl("/main")
  }
}
