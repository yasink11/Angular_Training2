import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private srv: ExampleService) { }


  ngOnInit(): void {

    this.srv.myobservable.subscribe({
      next(data) { console.log("First component" +data) },
      error(err) { console.log(err) },
      complete() { console.log("First component" +"Data yayınlama sona erdi") }
    })
  }
}
