import { Routes } from '@angular/router';

// componentes a enrutar
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
//import { HomeComponent } from '../home/home.component';
//import { AboutComponent } from '../about/about.component';
//import { ContactComponent } from '../contact/contact.component';

// Aqui estamos registrando las rutas que utilizaremos en los componentes
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    //{path: 'dishdetail/:id', component: DishdetailComponent },
    //{path: 'contact', component: ContactComponent},
    //{path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'} 
];

// pathMatch : que coincida por completo