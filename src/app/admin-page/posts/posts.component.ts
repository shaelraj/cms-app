import { MenusService } from './../../services/menus/menus.service';
import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { PostsService, Post } from './../../services/posts/posts.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditPostComponent } from './edit-post/edit-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  postDetails: Post = {
    title: "",
    menu_id: "",
    content: ""
  };

  menuList: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'title', 'menu_id', 'content', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private post: PostsService,private menu: MenusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.post.getPosts().subscribe((data: any) => {
      this.dataSource.data = data;
    });

    this.menu.getMenus().subscribe((data: any) => {
      this.menuList = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addPost() {
    this.post.addPost(this.postDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deletePost(postId){
    this.post.deletePost(postId);
  }

  editPost(postId, post: Post){
    this.post.updatePost(postId, post);
  }

  openEditDialog(element){
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '350px',
      data:{
        title: element.title,
        url: element.menu_id,
        content: element.content,
        'menuList': this.menuList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed' + result);
        this.editPost(element.id, result);
      }
    });

  }

  openDialog(postId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        console.log('The dialog was closed'+ postId);
        this.deletePost(postId);
      }
    });
  }

}
