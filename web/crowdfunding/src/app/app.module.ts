import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './component/registration/registration.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './component/auth/auth.component';
import { HeaderComponent } from './component/header/header.component';
import { CreateCampaignComponent } from './component/create-campaign/create-campaign.component';
import { UsersComponent } from './component/users/users.component';
import { AllCampaignsComponent } from './component/all-campaigns/all-campaigns.component';
import { UserCampaignsComponent } from './component/user-campaigns/user-campaigns.component';
import { CampaignComponent } from './component/campaign/campaign.component';
import { UpdateCampaignComponent } from './component/update-campaign/update-campaign.component';
import { CommentComponent } from './component/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthComponent,
    HeaderComponent,
    CreateCampaignComponent,
    UsersComponent,
    AllCampaignsComponent,
    UserCampaignsComponent,
    CampaignComponent,
    UpdateCampaignComponent,
    CommentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule],
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
