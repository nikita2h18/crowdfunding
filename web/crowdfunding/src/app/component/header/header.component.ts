import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { getToken } from "codelyzer/angular/styles/cssLexer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  localStorage = localStorage;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateAuth() {
    this.router.navigateByUrl("/auth")
  }

  navigateRegister() {
    this.router.navigateByUrl("/register")
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/main")
  }
}
