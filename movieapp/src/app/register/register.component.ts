import { Component, OnInit } from '@angular/core';
import { RegisterService} from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _register: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  registerUser()
  {
    this._register.registerUser(this.registerUserData)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/mymovies'])
        console.log(res)
      },
      err=>console.log(err)
    )
  }
}