import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  movies = [];
  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies()
      .subscribe(
        res => this.movies = res,
        err => console.log(err)
      )
  }
}
