import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


//modulos
import { BrowserModule } from '@angular/platform-browser';
import { CrudModule } from './crud/crud.module'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './crud/app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';


//servicios
import {UserService} from './services/user.service';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    HttpClientModule,
    RouterModule,
    ChartsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7sDUN-1VnhzLo82n5INIuvT11YdlCClw'
    })
  ],
  providers: [
    UserService,
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
