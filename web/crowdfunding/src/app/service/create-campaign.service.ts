import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../globals';
import { HttpClient } from '@angular/common/http';
import { CreateCampaign } from '../dto/CreateCampaign';

@Injectable({
  providedIn: 'root'
})
export class CreateCampaignService {

  constructor(
    private http: HttpClient,
  ) { }

  public createCampaign(token: string, createCampaign: CreateCampaign): Observable<void> {
    return this.http.post<void>(
      API_URL + 'campaign/create',
      createCampaign,
      {
        headers: {
          token,
        },
      },
    );
  }
}
