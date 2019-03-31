import { AfService } from './../../providers/af.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.less']
})
export class AppNavbarComponent implements OnInit {
  user: User;
  constructor(public afService: AfService) { 
    this.afService.user$.subscribe(user=> this.user= user);
  }

  ngOnInit() {
  }

}
