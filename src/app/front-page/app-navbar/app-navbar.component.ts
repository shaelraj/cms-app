import { MenusService } from './../../services/menus/menus.service';
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
  menuList:any;
  constructor(public afService: AfService, private menuService: MenusService) {  }

  ngOnInit() {
    this.afService.user$.subscribe(user=> this.user= user);
    this.menuService.getMenus().subscribe(menus =>{
      this.menuList = menus;
    })
  }

}
