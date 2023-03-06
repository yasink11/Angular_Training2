import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.scss']
})
export class EventclickComponent implements OnInit {

  // One Way Binding
  count=1;
  constructor() {
    this.count=1;
    console.log("Constructor Çalıştı")
  }

  ngOnInit(): void {
    console.log("ngOnInit Çalıştı")

  }


  writeToConsole(){
    console.log("Click");
  }

  increaseCount():void{
    this.count=this.count+1;
   }


}
