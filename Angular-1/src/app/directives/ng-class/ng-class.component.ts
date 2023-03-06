import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  isLarge=true;
  isRedBox=true;
  isBorder=true;
  constructor() { }

  ngOnInit(): void {
  }
  applyCss(){
    this.isLarge=!this.isLarge;
    this.isRedBox=!this.isRedBox;
    this.isBorder=!this.isBorder;
  }

}
