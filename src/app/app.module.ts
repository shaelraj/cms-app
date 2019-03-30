import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PagesListComponent } from './pages-list/pages-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
