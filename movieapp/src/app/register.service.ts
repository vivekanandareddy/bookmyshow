import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private registerUrl = "http://localhost:4000/api/register"
  
  constructor( private http: HttpClient ) { }

  registerUser(user)
  {
    return this.http.post<any>(this.registerUrl,user)
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
    
    
  }

}
