import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorizedUser } from '../dto/AuthorizedUser';
import { LOCALSTORAGE_TOKEN_NAME } from '../../globals';

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
    localStorage.setItem('role', user.role)
  }

  getUserRole() {
    return localStorage.getItem('role');
  }

  getUserToken() {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_NAME);
  }

  setUnauthorized() {
    this.setUser(this.UNAUTHORIZED);
    localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
  }
}
