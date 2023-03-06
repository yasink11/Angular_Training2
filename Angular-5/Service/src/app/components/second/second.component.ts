import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private srv:HelperService,private meta:Meta) { }

  ngOnInit(): void {
    this.meta.addTag({name:"author",content:"ahmet"})
    this.meta.addTag({name:"website",content:"wwww.google.com"})

    console.log(this.srv.upper('Angular (Second)'));

  }

  show(){
    console.log(this.srv.title)
  }

}
