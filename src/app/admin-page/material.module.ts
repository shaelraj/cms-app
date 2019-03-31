import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



@NgModule({
    imports:[
        MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule,
        MatSidenavModule, MatListModule
    ],
    exports:[
        MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule,
        MatSidenavModule, MatListModule
    ]
})

export class MaterialModule {}