import { Component, OnInit } from '@angular/core';
import {FavoritesMovies} from "../../interfaces/favorites-movies";

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  favoriteMovies: FavoritesMovies[] = [
    {
      userId: '1',
      movieId: '101',
      title: 'Inception',
      posterPath: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      overview: 'A skilled thief is offered a chance to erase his criminal history...',
    },
    {
      userId: '1',
      movieId: '102',
      title: 'The Dark Knight',
      posterPath: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      overview: 'Batman raises the stakes in his war on crime...',
    },
    // Agrega más películas aquí
  ];

  removeFromFavorites(movieId: string) {
    this.favoriteMovies = this.favoriteMovies.filter(movie => movie.movieId !== movieId);
    console.log(`Removed movie with ID: ${movieId}`);
  }

  viewDetails(movieId: string) {
    console.log(`Viewing details for movie with ID: ${movieId}`);
    // Aquí puedes redirigir a una página de detalles o mostrar un modal
  }

}
