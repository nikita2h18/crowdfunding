import { Component, OnInit } from '@angular/core';
import { User } from "../../dto/User";
import { Router } from "@angular/router";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.userService
      .getAll(localStorage.getItem('token'))
      .subscribe(
        (users: User[]): User[] =>
          this.users = users
      ,
      () => {
          console.log("error`");
        }
      );
  }

}
