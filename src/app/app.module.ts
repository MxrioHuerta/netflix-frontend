import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// import {LoginComponent} from "./login/login.component";


console.log('environment', environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyASG-US6kQWxubTWm_lkwXAwV2R2Ym1rsg",
      authDomain: "netflix-mario-huerta.firebaseapp.com",
      projectId: "netflix-mario-huerta",
      storageBucket: "netflix-mario-huerta.appspot.com",
      messagingSenderId: "715401499209",
      appId: "1:715401499209:web:2d250dfb0870e4551c6598"
    }),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    // LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
