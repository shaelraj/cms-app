import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AdminPageComponent } from './admin-page.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, AdminPageComponent, AppNavbarComponent
  ]
})
export class AdminPageModule { }
