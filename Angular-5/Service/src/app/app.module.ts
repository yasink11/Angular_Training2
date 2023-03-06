import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { backend_url } from './consts';
import { HelperService } from './services/helper.service';
import { Helper2Service } from './services/helper2.service';


let isProd:boolean=true

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:HelperService, useClass:isProd ? HelperService : Helper2Service},
    {provide:backend_url, useValue:'http://www.api2.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
