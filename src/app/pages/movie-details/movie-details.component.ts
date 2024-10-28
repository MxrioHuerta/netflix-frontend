import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from 'src/app/services/movies.service';
import {FavoriteMoviesService} from "../../services/favorite-movies.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailResult?: any;
  getMovieVideoResult?: any;
  getMovieCastResult?: any;
  alreadyFavorite: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private favoriteMoviesService: FavoriteMoviesService,
    private router: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
    this.checkIfAlreadyFavorite();
  }

  getMovie(id: any) {
    this.moviesService.getMovieDetails(id).subscribe(async (result) => {
    this.getMovieDetailResult = result;

    this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
    this.meta.updateTag({name: 'title', content: this.getMovieDetailResult.original_title});
    this.meta.updateTag({name: 'description', content: this.getMovieDetailResult.overview});

    this.meta.updateTag({property: 'og:type', content: "website"});
    this.meta.updateTag({property: 'og:url', content: ``});
    this.meta.updateTag({property: 'og:title', content: this.getMovieDetailResult.original_title});
    this.meta.updateTag({property: 'og:description', content: this.getMovieDetailResult.overview});
    this.meta.updateTag({
      property: 'og:image',
      content: `https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`
    });

    });
  }

  getVideo(id: any) {
    this.moviesService.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.moviesService.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result.cast;
    });
  }

  addFavorite() {
    let movieId: string | null = this.router.snapshot.paramMap.get('id');
    let title: string = this.getMovieDetailResult.original_title;
    let posterPath: string = this.getMovieDetailResult.poster_path;
    let overview: string = this.getMovieDetailResult.overview

    if (!movieId) {
      return;
    }
    this.favoriteMoviesService.addFavorite(movieId, title, posterPath, overview).subscribe(() => {
      this.alreadyFavorite = true;
    });
  }

  checkIfAlreadyFavorite() {
    let movieId: string | null = this.router.snapshot.paramMap.get('id');
    if (!movieId) {
      return;
    }
    this.favoriteMoviesService.getFavorite(movieId).subscribe((result) => {
      this.alreadyFavorite = !!result;
    });
  }


}
