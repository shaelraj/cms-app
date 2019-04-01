import { PostsService } from './../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  postList: any;

  constructor(private postService: PostsService) { 
    this.postService.getPosts().subscribe(posts=>{
      this.postList = posts;
    });
  }

  ngOnInit() {
  }

}
