import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { OrnektComponent } from './ornekt/ornekt.component';
import { SearchComponent } from './search/search.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AComponent } from './shared/a/a.component';
import { BComponent } from './shared/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    OrnektComponent,
    SearchComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,useClass:TokkenInterceptor, multi:true},
    // {provide:HTTP_INTERCEPTORS,useClass:CustomerrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
