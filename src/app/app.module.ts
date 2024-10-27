import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {LoginComponent} from "./pages/login/login.component";
import { BrowseComponent } from './pages/browse/browse.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
