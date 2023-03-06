import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageserviceService } from './pageservice.service';
import { PagepipePipe } from './pagepipe.pipe';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    FirstPageComponent,
    SecondPageComponent,
    PagepipePipe,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FirstPageComponent,
    SecondPageComponent,
    PagepipePipe
  ],
  providers:[PageserviceService]
})
export class PageModule { }
