import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../dto/User';
import {API_URL} from '../../globals';
import {HttpClient} from '@angular/common/http';
import {Campaign} from '../dto/Campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll = (): Observable<Campaign[]> =>
    this.http.get<Campaign[]>(API_URL + 'campaign/all');

  public getUserCampaigns = (token: string): Observable<Campaign[]> =>
    this.http.get<Campaign[]>(API_URL + 'campaign/user', {
      headers: {
        token
      }
    });

  public getCampaign(id: bigint): Observable<Campaign> {
    return this.http.get<Campaign>(API_URL + 'campaign/' + id);
  }

  public updateCampaign(token: string, id: bigint): Observable<void> {
    return this.http.delete<void>(API_URL + 'campaign/' + id, {
      headers: {
        token
      }
    })
  }

  public deleteCampaign(token: string, id: bigint): Observable<void> {
    return this.http.delete<void>(API_URL + 'campaign/' + id, {
      headers: {
        token
      }
    })
  }
}
