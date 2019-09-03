import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { LOCALSTORAGE_TOKEN_NAME } from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class TokenProviderService {

  private tokenSubject = new BehaviorSubject<string>(null);

  readonly UNAUTHORIZED: string = "";
  token: Observable<string> = this.tokenSubject.asObservable();

  init() {
    this.setToken(localStorage.getItem(LOCALSTORAGE_TOKEN_NAME));
  }

  setToken(token: string) {
    this.tokenSubject.next(token);
  }

  setUnauthorized() {
    this.setToken(this.UNAUTHORIZED);
    localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
  }
}
