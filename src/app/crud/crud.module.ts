import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//compoenentes
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DialogSpinnerComponent } from './componentes/dialog-spinner/dialog-spinner.component';

//modulos
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentesModule } from '../crud/componentes/componentes.module'; 
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

//servicios
import {UserService} from '../services/user.service';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SensorComponent } from './sensor/sensor.component';
import { DistritoComponent } from './distrito/distrito.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SensorComponent,
    DistritoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ComponentesModule,
    MatDialogModule,
    MatSidenavModule,
    ChartsModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7sDUN-AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SensorComponent,
    DistritoComponent
  ],
  providers: [
    UserService
    
  ]
})
export class CrudModule { }
