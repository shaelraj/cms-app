import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
    imports:[
        MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule,
        MatSidenavModule, MatListModule, MatTableModule, MatInputModule,
        MatFormFieldModule, MatPaginatorModule
    ],
    exports:[
        MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule,
        MatSidenavModule, MatListModule, MatTableModule, MatInputModule,
        MatFormFieldModule, MatPaginatorModule
    ]
})

export class MaterialModule {}