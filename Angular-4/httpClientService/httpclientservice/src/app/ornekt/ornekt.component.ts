import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-ornekt',
  templateUrl: './ornekt.component.html',
  styleUrls: ['./ornekt.component.scss']
})
export class OrnektComponent implements OnInit {

  post:Post | undefined;
  constructor(private srv:JsonplaceholderService) { }

  ngOnInit(): void {

    this.srv.getPost(22).subscribe({
      next:(x)=>this.post=x,
      error:(e)=>console.log(e),
      complete:()=>console.log("istek tamamlandı")
 })

  }

}
