import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    imports:[
        MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule
    ],
    exports:[
        MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule
    ]
})

export class MaterialModule {}