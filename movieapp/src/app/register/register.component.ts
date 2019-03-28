import { Component, OnInit } from '@angular/core';
import { RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _register: RegisterService) { }

  ngOnInit() {
  }

  registerUser()
  {
    this._register.registerUser(this.registerUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
