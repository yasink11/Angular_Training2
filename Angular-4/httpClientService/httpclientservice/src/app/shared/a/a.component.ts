import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  currency:string| undefined;
  constructor(private srv:JsonplaceholderService) { }

  ngOnInit(): void {
    this.srv.currencyObservable.subscribe(x=>{
this.currency=x;
    })
  }

}
