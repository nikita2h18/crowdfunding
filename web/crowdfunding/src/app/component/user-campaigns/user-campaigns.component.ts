import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../service/campaign.service';
import {Campaign} from '../../dto/Campaign';
import {MeProviderService} from "../../service/me-provider.service";

@Component({
  selector: 'app-user-campaigns',
  templateUrl: './user-campaigns.component.html',
  styleUrls: ['./user-campaigns.component.scss']
})
export class UserCampaignsComponent implements OnInit {
  private campaigns: Campaign[] = [];

  constructor(
    private campaignService: CampaignService,
    private meProviderService: MeProviderService,
  ) { }

  ngOnInit() {
    this.campaignService.getUserCampaigns(
      this.meProviderService.getUserToken()
    )
      .subscribe(
        (campaign: Campaign[]): Campaign[] => this.campaigns = campaign
      );
  }

}
