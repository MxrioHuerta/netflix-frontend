import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss']
})
export class MoviesSliderComponent implements OnInit {

  bannerResult?: any = [];

  constructor (private moviesService: MoviesService, private router: ActivatedRoute) { }

  ngOnInit (): void {
    this.bannerData();
  }

  bannerData () {
    this.moviesService.sliderMovies().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

}
