import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


//modulos
import { BrowserModule } from '@angular/platform-browser';
import { CrudModule } from './crud/crud.module'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './crud/app-routing/app-routing.module';
import { RouterModule } from '@angular/router';

//servicios
import {UserService} from './services/user.service';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';
import { baseURL } from './shared/baseurl';


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
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL} // se puede proveer una propiedad global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
