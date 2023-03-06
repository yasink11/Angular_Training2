import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from './models/post';
import { User } from './models/user';
import { User2 } from './models/user2';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'httpclientservice';

  currencyList:string[]=["Türk Lirası", "Dolar"]

  selectCurrency= new FormControl('Türk Lirası')

  isLoadingShow:boolean=true;
  postList:string[]=[];

  constructor(private srv:JsonplaceholderService){

  }

  ngOnInit():void{
  this.srv.getPostList(1,20).subscribe(x=>{
    this.postList=x;
    this.isLoadingShow=false;
  });

  this.selectCurrency.valueChanges.subscribe(x=>{
    this.srv.setCurrency(x)
  })
  }
}
