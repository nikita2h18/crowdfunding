import { Injectable } from '@angular/core';
import { UserCredentials } from '../dto/UserCredentials';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
  ) { }

  public register = (registerUser: UserCredentials): Observable<void> =>
    this.http.post<void>(API_URL + 'register', registerUser);
}
