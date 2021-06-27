import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module'; 
import {UserService} from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    {provide: 'BaseURL', useValue: baseURL} // se puede proveer una propiedad global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
