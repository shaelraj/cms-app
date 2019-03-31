import { PostsComponent } from './posts/posts.component';
import { MenusComponent } from './menus/menus.component';
import { AdminPageComponent } from './admin-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '', component: AdminPageComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'menus', component: MenusComponent },
            { path: 'posts', component: PostsComponent },
            { path: '', redirectTo: "dashboard" },
            { path: '**', component: DashboardComponent },
        ]
    },
]

export const AdminRoutingModule = RouterModule.forChild(routes);