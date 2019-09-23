import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateCampaign} from "../dto/CreateCampaign";
import {Observable} from "rxjs";
import {API_URL} from "../../globals";
import {UpdateCampaign} from "../dto/UpdateCampaign";

@Injectable({
  providedIn: 'root'
})
export class UpdateCampaignService {

  constructor(
    private http: HttpClient,
  ) { }

  public updateCampaign(token: string, id: bigint, updateCampaign: UpdateCampaign): Observable<void> {
    return this.http.put<void>(
      API_URL + 'campaign/' + id, updateCampaign,
      {
        headers: {
          token,
        },
      },
    );
  }

}
