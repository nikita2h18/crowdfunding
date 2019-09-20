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
    this.http.get<Campaign[]>(API_URL + 'campaign/all', {
      headers: {
        token
      }
    });

  public getCampaign(id: bigint): Observable<Campaign> {
    return this.http.get<Campaign>(API_URL + 'campaign/' + id);
  }


}
