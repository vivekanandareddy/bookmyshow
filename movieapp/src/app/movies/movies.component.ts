import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-events',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  
  movies = [];
  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies()
      .subscribe(
        res => this.movies=res,
        err => console.log(err)
      )
  }
}