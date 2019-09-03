import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API_URL, LOCALSTORAGE_TOKEN_NAME } from "../../globals";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(
    private http: HttpClient,
  ) { }

  public logOut(token: string): Observable<void> {
    return this.http.get<void>(
      API_URL + 'auth/logout',
      {
        headers: {
          token,
        },
      },
    );
  };
}
