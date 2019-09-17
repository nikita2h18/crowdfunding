import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dto/User';
import { API_URL } from '../../globals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

  public block = (token: string, userId: bigint[]): Observable<void> => (
    this.http.post<void>(
      API_URL + 'admin/block',
      userId,
      {
        headers: {
          token,
        }
      }
    )
  )

  public unblock = (token: string, userId: bigint[]): Observable<void> => (
    this.http.post<void>(
      API_URL + 'admin/unblock',
      userId,
      {
        headers: {
          token,
        }
      }
    )
  )

  public setAdminRole = (token: string, userId: bigint[]): Observable<void> => (
    this.http.post<void>(
      API_URL + 'admin/setadmin',
      userId,
      {
        headers: {
          token,
        }
      }
    )
  )

  public setDefaultRole = (token: string, userId: bigint[]): Observable<void> => (
    this.http.post<void>(
      API_URL + 'admin/setdefault',
      userId,
      {
        headers: {
          token,
        }
      }
    )
  )
}
