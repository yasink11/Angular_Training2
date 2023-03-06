import { Component } from '@angular/core';
import { PageserviceService } from './pages/pageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Module';

  constructor(private srv:PageserviceService){

    this.srv.Write();
  }
}
