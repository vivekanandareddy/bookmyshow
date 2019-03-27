import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor() { }

  registerUser(user)
  {
    
    localStorage.setItem('email',user.email);
    localStorage.setItem('password', user.password);
    
    return user
  }

}
