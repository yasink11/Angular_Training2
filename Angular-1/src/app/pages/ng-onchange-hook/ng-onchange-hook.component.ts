import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-hook',
  templateUrl: './ng-onchange-hook.component.html',
  styleUrls: ['./ng-onchange-hook.component.scss']
})
export class NgOnchangeHookComponent implements OnInit, OnChanges {

@Input() count:number | undefined;
  constructor() { }

  ngOnChanges(changes:SimpleChanges):void{
console.log(changes)
  }

  ngOnInit(): void {
  }

}
