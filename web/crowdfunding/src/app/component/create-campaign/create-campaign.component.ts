import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateCampaign} from '../../dto/CreateCampaign';
import {CreateCampaignService} from '../../service/create-campaign.service';
import {Router} from '@angular/router';
import {UploadImageService} from '../../service/upload-image.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent {
  private createCampaign: CreateCampaign = new CreateCampaign();
  private file: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private createCampaignService: CreateCampaignService,
    private uploadImageService: UploadImageService,
  ) {
  }

  onChange(event) {
    this.file = event.srcElement.files[0];
  }

  create() {
    this.uploadImageService.upload(this.file)
      .subscribe(
        path => {
          this.createCampaign.imagePath = path;
          this.createCampaignService.createCampaign(localStorage.getItem('token'), this.createCampaign)
            .subscribe(
              () => {
                this.router.navigateByUrl('/main');
              }
            );
        }
      );

  }
}
