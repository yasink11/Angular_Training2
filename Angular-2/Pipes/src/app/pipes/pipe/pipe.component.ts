import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  price:number=1250;
  myDate=new Date();
  person1:Person={firstName:"Ahmet", lastName:"Karaçam",age:11};
  person2:any={firstName:"Sümeyye", lastName:"Karaçam", age:13};
  constructor() { }

  ngOnInit(): void {
  }

}


interface Person{
firstName:string,
lastName:string,
age:number
}
