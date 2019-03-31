import { FrontPageComponent } from './front-page/front-page.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: 'app/front-page/front-page.module#FrontPageModule'},
    { path: 'login', component: LoginPageComponent},
    { path: 'admin',loadChildren: 'app/admin-page/admin-page.module#AdminPageModule', canActivate: [AdminGuard]},
    { path: '**', redirectTo: 'home' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }