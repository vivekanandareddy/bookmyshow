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
    console.log(this._register.registerUser(this.registerUserData))
  }
}
