import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from "./component/registration/registration.component";
import { AuthComponent } from "./component/auth/auth.component";


const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
