import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  declarations: [
      FrontPageComponent,  HomePageComponent, PagesListComponent
  ],
  entryComponents:[]
})
export class FrontPageModule { }
