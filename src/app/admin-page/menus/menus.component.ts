import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { MenusService, Menu } from './../../services/menus/menus.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditMenuComponent } from './edit-menu/edit-menu.component';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.less']
})
export class MenusComponent implements OnInit {

  menuDetails: Menu = {
    title: "",
    url: ""
  };

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'title', 'url', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private menu: MenusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.menu.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addMenu() {
    this.menu.addMenu(this.menuDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deleteMenu(menuId){
    this.menu.deleteMenu(menuId);
  }

  editMenu(menuId, menu: Menu){
    this.menu.updateMenu(menuId, menu);
  }

  openEditDialog(element){
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '350px',
      data:{
        title: element.title,
        url: element.url
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed' + result);
        this.editMenu(element.id, result);
      }
    });

  }

  openDialog(menuId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        console.log('The dialog was closed'+ menuId);
        this.deleteMenu(menuId);
      }
    });
  }

}
