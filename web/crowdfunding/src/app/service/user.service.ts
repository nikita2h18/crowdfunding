import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../dto/User";
import { API_URL } from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAll = (token: string): Observable<User[]> =>
    this.http.get<User[]>(
      API_URL + 'admin/users',
      {
        headers: {
          token: token
        }
      }
    );
}
