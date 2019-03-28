import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData={}
  constructor( private _loginserv:LoginService) { }

  ngOnInit() {
  }

  loginUser()
  {
    
    this._loginserv.loginUser(this.loginUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    /*if(this._loginserv.loginUser(this.loginUserData) == 0)
    { console.log('User Logged In');}
    else
    { console.log('Wrong Username or Password');}*/
  }

}
