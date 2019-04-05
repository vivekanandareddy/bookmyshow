import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  movies = [];
  constructor(private _moviesService: MoviesService,private router:Router) { }

  ngOnInit() {
    this._moviesService.getMovies()
      .subscribe(
        res => this.movies = res,
        err => {
          if(err instanceof HttpResponse)
          {
            if(err.status==401){
              this.router.navigate(['/login'])
            }
          }
        }
      )
  }
}
