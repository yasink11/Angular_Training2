import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam3',
  template:`<h1>Üçüncü Component</h1>`,
  styles:[`.h1{color:blue}`]
})
export class Example3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
