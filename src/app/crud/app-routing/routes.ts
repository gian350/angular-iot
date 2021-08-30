import { Routes } from '@angular/router';

// componentes a enrutar
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { SensorComponent } from '../sensor/sensor.component';
import { DistritoComponent } from '../distrito/distrito.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
//import { ContactComponent } from '../contact/contact.component';

// Aqui estamos registrando las rutas que utilizaremos en los componentes
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home/:dni', component: HomeComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'sensor', component: SensorComponent},
            {path: 'distrito', component: DistritoComponent},
            {path: '', redirectTo: 'distrito', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: '/login', pathMatch: 'full'} 
];

// pathMatch : que coincida por completo