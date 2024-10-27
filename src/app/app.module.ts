import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Firebase imports
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {LoginComponent} from "./components/login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
