import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  number=5;

  style:any={'background-color':'purple'}
  constructor() { }

  ngOnInit(): void {
  }

}
