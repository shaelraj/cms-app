import { MaterialModule } from './../material.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';

import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialModule
  ],
  declarations: [
      FrontPageComponent,  HomePageComponent, PagesListComponent, AppNavbarComponent, PagesComponent
  ],
  entryComponents:[]
})
export class FrontPageModule { }
