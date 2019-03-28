import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor() { }

  registerUser(user)
  {
    
    /*let usernames=[];
    
    usernames.push(JSON.parse(localStorage.getItem('usernames')));
    
    for(let i=0;i<usernames.length;i++)
    {
      if(usernames[i] == user.email)
      {
        console.log('Username exists, Use any other Username');
      }
      else{
        usernames.push(user.email);
        
      }
    }
      
    localStorage.setItem('usernames', JSON.stringify(usernames));
   // localStorage.setItem('email',user.email);
    localStorage.setItem('password', user.password);

    console.log(JSON.parse(localStorage.getItem('usernames'))); */
    
    return user
  }

}
