import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FavoritesMovies} from '../interfaces/favorites-movies';
import {environment} from "../../environments/environment";
import {Auth} from '@angular/fire/auth';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  private baseURL = environment.backendUrl + '/favorite';

  constructor(private http: HttpClient, private auth: Auth) {
  }


  getUserToken() {
    const user = this.auth.currentUser as any; // Obtiene el usuario autenticado
    return user.accessToken;
  }

  getFavoriteMovies(): Observable<FavoritesMovies[]> {
    const user = this.auth.currentUser; // Obtiene el usuario autenticado
    const token = this.getUserToken()
    console.log("ABC", token)
    if (user) {
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      return this.http.get<any[]>(`${this.baseURL}/${user.uid}`, {headers: headers}); // Envía el userId en la solicitud
    } else {
      return new Observable((observer) => {
        observer.error('No authenticated user');
      });
    }
  }

  addFavorite(movieId: string, title: string, posterPath: string, overview: string): Observable<any> {
    const user = this.auth.currentUser; // Obtiene el usuario autenticado
    if (user) {
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getUserToken()}`
      }
      return this.http.post<any>(this.baseURL, {
        userId: user.uid,
        movieId: movieId,
        title: title,
        posterPath: posterPath,
        overview: overview
      }, {headers: headers}); // Envía el userId en la solicitud
    } else {
      return new Observable((observer) => {
        observer.error('No authenticated user');
      });
    }
  }

  removeFavorite(movieId: string): Observable<any> {
    const user = this.auth.currentUser; // Obtiene el usuario autenticado
    if (user) {
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getUserToken()}`
      }
      return this.http.delete<any>(`${this.baseURL}/${user.uid}/movie/${movieId}`, {headers: headers}); // Envía el userId en la solicitud
    } else {
      return new Observable((observer) => {
        observer.error('No authenticated user');
      });
    }
  }

  getFavorite(movieId: string): Observable<any> {
    const user = this.auth.currentUser; // Obtiene el usuario autenticado
    if (user) {
      let headers = {
        'Content-Type': 'application /json',
        'Authorization': `Bearer ${this.getUserToken()}`,
      }
      return this.http.get<any>(`${this.baseURL}/${user.uid}/movie/${movieId}`, {headers: headers});
    } else {
      return new Observable((observer) => {
        observer.error('No authenticated user');
      });
    }
  }
}
