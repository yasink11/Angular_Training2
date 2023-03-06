import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { backend_url } from 'src/app/consts';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public srv:HelperService,private title:Title,
    @Inject(backend_url) private url:string
    ) { }

  ngOnInit(): void {
    console.log(this.srv.upper('angular (first)'));
    this.title.setTitle("Angular first component")
    this.srv.SendSms("mesaj" ,"0555 555 5555")
    console.log(this.url);

  }

  change(){
    this.srv.title="Component A Title"
  }

}
