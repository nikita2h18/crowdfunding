import { Injectable } from '@angular/core';
import { AuthUser } from "../dto/AuthUser";
import { Observable } from "rxjs";
import { API_URL } from "../../globals";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  public auth = (authUser: AuthUser): Observable<void> =>
    this.http.post<void>(API_URL + 'auth', authUser);
}
