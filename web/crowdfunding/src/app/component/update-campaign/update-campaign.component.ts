import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadImageService} from "../../service/upload-image.service";
import {UpdateCampaign} from "../../dto/UpdateCampaign";
import {UpdateCampaignService} from "../../service/update-campaign.service";

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.scss']
})
export class UpdateCampaignComponent implements OnInit {
  private updateCampaign: UpdateCampaign = new UpdateCampaign();
  private file: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private updateCampaignService: UpdateCampaignService,
    private uploadImageService: UploadImageService,
  ) {
  }

  ngOnInit() {
  }

  onChange(event) {
    this.file = event.srcElement.files[0];
  }

  update() {
    this.uploadImageService.upload(this.file)
      .subscribe(
        path => {
          this.updateCampaign.imagePath = path;
          this.route.params.subscribe(
            params => {
              console.log(params['id']);
              this.updateCampaignService.updateCampaign(localStorage.getItem('token'), params['id'], this.updateCampaign)
                .subscribe(
                  () => {
                    this.router.navigateByUrl('/campaign/all');
                  }
                )
            }
          );
        }
      );

  }
}
