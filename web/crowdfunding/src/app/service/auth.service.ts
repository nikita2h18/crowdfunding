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

  public auth = (authUser: AuthUser): Observable<string> => (
    this.http.post<string>(
      API_URL + 'auth',
      authUser,
      { responseType: 'text' as 'json' },
    )
  );}
