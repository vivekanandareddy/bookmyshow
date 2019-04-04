import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { RegisterService } from './register.service';
import { LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private regauth: RegisterService,private loginaut:LoginService,private router:Router){}
  canActivate():boolean{
    if( this.regauth.loggedIn() && this.loginaut.loggedIn() )
    {return true}
    else{
      this.router.navigate(['/login'])
      return false
    }

  }
  
}
