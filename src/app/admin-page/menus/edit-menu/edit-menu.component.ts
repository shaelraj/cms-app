import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.less']
})
export class EditMenuComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
