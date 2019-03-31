import { PostsService } from './services/posts/posts.service';
import { MenusService } from './services/menus/menus.service';
import { MaterialModule } from './material.module';
import { AdminGuard } from './guards/admin.guard';
import { AfService } from './providers/af.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PagesListComponent } from './pages-list/pages-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomePageComponent } from './home-page/home-page.component';
import { SubscriberGuard } from './guards/subscriber.guard';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AppRoutingModule, AngularFireAuthModule, AngularFirestoreModule ,
    BrowserAnimationsModule, MaterialModule, FormsModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard, MenusService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
