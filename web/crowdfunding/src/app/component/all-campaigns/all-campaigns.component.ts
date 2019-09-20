import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../service/campaign.service';
import {Campaign} from '../../dto/Campaign';
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-campaigns',
  templateUrl: './all-campaigns.component.html',
  styleUrls: ['./all-campaigns.component.scss']
})
export class AllCampaignsComponent implements OnInit {
  private campaigns: Campaign[] = [];

  constructor(
    private campaignService: CampaignService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.campaignService.getAll()
      .subscribe(
        (campaigns: Campaign[]): Campaign[] => {
          return this.campaigns = campaigns;
        }
      );
  }
}
