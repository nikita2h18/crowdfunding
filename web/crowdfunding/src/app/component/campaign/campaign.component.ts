import { Component, OnInit } from '@angular/core';
import {Campaign} from "../../dto/Campaign";
import {CampaignService} from "../../service/campaign.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MeProviderService} from "../../service/me-provider.service";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  campaign: Campaign = new Campaign();

  constructor(
    private meProviderService: MeProviderService,
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router,
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

  deleteCampaign() {
    this.route.params.subscribe(
      params => {
        console.log('params', params);
        this.campaignService.deleteCampaign(this.meProviderService.getUserToken(), params['id'])
          .subscribe(
            () => this.router.navigateByUrl('campaign/all')
          );
      }
    )
  }

  updateCampaign() {
    this.router.navigateByUrl('campaign/update/' + this.campaign.id);
  }
}
