import { Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

export const routes: Routes = [
        {
                path: "login",
                component: LoginPageComponent
        },
        {
                path: "home",
                component: HomePageComponent
        },
        {
                path:"",
                redirectTo: "home",
                pathMatch: "full"
        }
];
