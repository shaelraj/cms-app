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
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SubscriberGuard } from './guards/subscriber.guard';
import { FormsModule } from '@angular/forms';
import { FrontPageModule } from './front-page/front-page.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AppRoutingModule, AngularFireAuthModule, AngularFirestoreModule ,
    BrowserAnimationsModule, MaterialModule, FormsModule, FrontPageModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard, MenusService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
