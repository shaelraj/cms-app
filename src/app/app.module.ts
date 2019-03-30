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
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SubscriberGuard } from './guards/subscriber.guard';



@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent,
    AppNavbarComponent,
    HomePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AppRoutingModule, AngularFireAuthModule, AngularFirestoreModule ,
    BrowserAnimationsModule, MaterialModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
