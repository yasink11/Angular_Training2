import { Component, OnInit } from '@angular/core';
import { Product, Type } from 'src/app/models/product';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  product:Product
  constructor() {
    this.product = new Product(1,"Kalem",Type.Small);
   }

  ngOnInit(): void {
  }

}
