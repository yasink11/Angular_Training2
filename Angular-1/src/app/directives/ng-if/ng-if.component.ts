import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

isShow=true
  constructor() { }

  ngOnInit(): void {
  }
  showHide(){
    this.isShow=!this.isShow;
  }
}
