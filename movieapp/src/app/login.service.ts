import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl ="http://localhost:4000/api/login"
  constructor(private http:HttpClient,private router:Router) { }
  loginUser(user)
  {
     return this.http.post<any>(this._loginUrl,user)

  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('token')
  }
  logoutuser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/movies'])
  }
}
