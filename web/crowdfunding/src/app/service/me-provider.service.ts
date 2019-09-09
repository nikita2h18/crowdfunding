import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { AuthorizedUser } from "../dto/AuthorizedUser";
import { LOCALSTORAGE_TOKEN_NAME } from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class MeProviderService {
  private userSubject = new BehaviorSubject<AuthorizedUser>(new AuthorizedUser());

  user: Observable<AuthorizedUser> = this.userSubject.asObservable();
  readonly UNAUTHORIZED: AuthorizedUser = new AuthorizedUser();

  setUser(user: AuthorizedUser) {
    this.userSubject.next(user);
    localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, user.token);
  }

  setUnauthorized() {
    this.setUser(this.UNAUTHORIZED);
    localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
  }
}
