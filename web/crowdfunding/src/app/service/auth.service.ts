import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API_URL } from "../../globals";
import { HttpClient } from "@angular/common/http";
import { UserCredentials } from "../dto/UserCredentials";
import { User } from "../dto/User";
import { AuthorizedUser } from "../dto/AuthorizedUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public auth = (authUser: UserCredentials): Observable<AuthorizedUser> => (
    this.http.post<User>(
      API_URL + 'auth',
      authUser,
    )
  );
}



