import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  currency:string| undefined;
  constructor(private srv:JsonplaceholderService) { }

  ngOnInit(): void {
    this.srv.currencyObservable.subscribe(x=>{
      this.currency=x;
    })
  }

}
