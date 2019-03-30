import { AfService } from './../providers/af.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  user: User;

  constructor(public afService: AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user=> this.user= user);
  }

  login(){
    this.afService.loginWithGogle();
  }

}
