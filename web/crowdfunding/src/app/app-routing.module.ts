import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from "./component/registration/registration.component";
import { AuthComponent } from "./component/auth/auth.component";
import { HeaderComponent } from "./component/header/header.component";
import { CreateCampaignComponent } from "./component/create-campaign/create-campaign.component";
import { UsersComponent } from "./component/users/users.component";


const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path:'main',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
