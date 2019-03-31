import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '', component: FrontPageComponent,
        children: [
            { path: 'home', component: HomePageComponent },
            { path: 'article', component: PagesListComponent },
            { path: '**', component: HomePageComponent },
        ]
    },
]

export const FrontRoutingModule = RouterModule.forChild(routes);