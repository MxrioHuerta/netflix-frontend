import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MoviesService } from './services/movies.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesSliderComponent } from './pages/movies-slider/movies-slider.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    SearchComponent,
    NavbarComponent,
    MoviesSliderComponent,
    LoginComponent,
    RegisterComponent,
    FavoriteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
