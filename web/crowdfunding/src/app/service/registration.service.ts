import { Injectable } from '@angular/core';
import { RegisterUser } from "../dto/RegisterUser";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
  ) { }

  public register = (registerUser: RegisterUser): Observable<void> =>
    this.http.post<void>(API_URL + 'register', registerUser);
}
