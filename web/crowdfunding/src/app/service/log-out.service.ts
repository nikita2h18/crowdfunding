import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API_URL } from "../../globals";
import { HttpClient } from "@angular/common/http";
import options from "../utils/getOptins";

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(
    private http: HttpClient,
  ) { }

  public logOut = (token: string): Observable<void> =>
    this.http.post<void>(
      API_URL + 'auth/log_out',
      token,
      options,
    );
}
