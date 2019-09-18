import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../service/campaign.service';
import {Campaign} from '../../dto/Campaign';

@Component({
  selector: 'app-all-campaigns',
  templateUrl: './all-campaigns.component.html',
  styleUrls: ['./all-campaigns.component.scss']
})
export class AllCampaignsComponent implements OnInit {
  private campaigns: Campaign[] = [];

  constructor(
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.campaignService.getAll()
      .subscribe(
        (campaigns: Campaign[]): Campaign[] => this.campaigns = campaigns
      );
  }

}
