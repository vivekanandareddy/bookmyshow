import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 private _moviesUrl="http://localhost:4000/api/movies";
  private _myMoviesUrl = "";

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get<any>(this._moviesUrl)
  }
  getmyMovies() {
    return this.http.get<any>(this._myMoviesUrl)
  }
}
