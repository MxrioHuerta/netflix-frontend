import { Component, OnInit } from '@angular/core';
import {FavoritesMovies} from "../../interfaces/favorites-movies";
import {FavoriteMoviesService} from "../../services/favorite-movies.service";

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  favoriteMovies: FavoritesMovies[] = [];

  constructor(private favoriteMoviesService: FavoriteMoviesService) { }

  ngOnInit(): void {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies() {
    this.favoriteMoviesService.getFavoriteMovies().subscribe((movies) => {
      this.favoriteMovies = movies;
    });
  }

  removeFavorite(movieId: string) {
    this.favoriteMoviesService.removeFavorite(movieId).subscribe(() => {
      this.loadFavoriteMovies();
    });
  }

}
