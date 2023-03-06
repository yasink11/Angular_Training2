import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapass-input',
  templateUrl: './datapass-input.component.html',
  styleUrls: ['./datapass-input.component.scss']
})
export class DatapassInputComponent implements OnInit {

  @Input() name:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.name
  }

}
