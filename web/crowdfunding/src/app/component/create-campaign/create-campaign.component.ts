import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {
  selectedFile = null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  onFileSelected(event) {
      this.selectedFile = event.target.files[0];
  }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }
}
