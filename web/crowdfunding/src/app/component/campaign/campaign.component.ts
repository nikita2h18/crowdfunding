import { Component, OnInit } from '@angular/core';
import {Campaign} from "../../dto/Campaign";
import {CampaignService} from "../../service/campaign.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  campaign: Campaign = new Campaign();

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('params', params);
        this.campaignService.getCampaign(params['id'])
          .subscribe(
            campaign => this.campaign = campaign
          );
      }
    )
  }
}
