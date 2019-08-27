import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from "./component/registration/registration.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule, MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from './component/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
