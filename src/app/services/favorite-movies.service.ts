import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoritesMovies } from '../interfaces/favorites-movies';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  private baseURL = 'http://localhost:3000/api/favorites';

  constructor(private http: HttpClient) { }

  getFavoriteMovies(): Observable<FavoritesMovies[]> {
    return this.http.get<FavoritesMovies[]>(this.baseURL);
  }

  addFavoriteMovie(movie: FavoritesMovies): Observable<FavoritesMovies> {
    return this.http.post<FavoritesMovies>(this.baseURL, movie);
  }

  deleteFavoriteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
