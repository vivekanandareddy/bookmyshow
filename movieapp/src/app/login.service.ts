import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loginUser(user)
  {
    
    let username = localStorage.getItem('email');
    let password = localStorage.getItem('password');

    if((user.email==username) && (user.password==password))
    {
      return 0;
    }
    else{
      return 1;
    }
    
  }
}
