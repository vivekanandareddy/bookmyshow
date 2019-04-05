import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl ="http://localhost:4000/api/login"
  constructor(private http:HttpClient) { }
  loginUser(user)
  {
     return this.http.post<any>(this._loginUrl,user)



    /*let username = localStorage.getItem('email');
    let password = localStorage.getItem('password');

    if((user.email==username) && (user.password==password))
    {
      return 0;
    }
    else{
      return 1;
    }
    */
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
