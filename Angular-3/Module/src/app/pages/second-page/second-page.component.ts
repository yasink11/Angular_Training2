import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.activatedRoute.paramMap.subscribe(x=>{
      console.log("Dynamic Id:" +x.get('id'))

    })
  }

  changeId(){
    this.router.navigate(['ikincisayfa',10])
  }

}
