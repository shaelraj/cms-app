import { PostsService } from './../../services/posts/posts.service';
import { MenusService, Menu } from './../../services/menus/menus.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {

  menu: any;
  postList: any;

  constructor(private route: ActivatedRoute, private menuService: MenusService, private postService: PostsService) {
    this.route.params.subscribe(params => {
      this.menuService.getConditionalMenus('url', '==', params.url).subscribe(menu => {
        if (menu.length > 0) {
          this.menu = menu[0]
          this.postService.getConditionalPost('menu_id', '==', this.menu.id).subscribe(posts => {
            this.postList = posts
          });
        }
      });
    });
  }

  ngOnInit() {
  }

}
