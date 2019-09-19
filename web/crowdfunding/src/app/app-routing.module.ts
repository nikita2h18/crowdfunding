import { NgModel } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthComponent } from './component/auth/auth.component';
import { HeaderComponent } from './component/header/header.component';
import { CreateCampaignComponent } from './component/create-campaign/create-campaign.component';
import { UsersComponent } from './component/users/users.component';
import {NgModule} from '@angular/core';
import {AllCampaignsComponent} from "./component/all-campaigns/all-campaigns.component";
import {UserCampaignsComponent} from "./component/user-campaigns/user-campaigns.component";
import {CampaignComponent} from "./component/campaign/campaign.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'campaign/all',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main',
    component: HeaderComponent
  },
  {
    path: 'campaign/create',
    component: CreateCampaignComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'campaign/all',
    component: AllCampaignsComponent,
  },
  {
    path: 'campaign/user',
    component: UserCampaignsComponent,
  },
  {
    path: 'campaign',
    component: CampaignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
