import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('First page yüklendi')

    let page = this.activatedRoute.snapshot.queryParamMap.get('page');
    let pageSize = this.activatedRoute.snapshot.queryParamMap.get('pageSize');
    console.log(`page:${page} / pageSize:${pageSize}`);

    this.activatedRoute.queryParamMap.subscribe(x=>{
       console.log(`Dynamic page:${x.get("page")}/ pageSize:${x.get("pageSize")}`);
    })
  }


  changeQueryParams(){
    this.router.navigate(['birincisayfa'],{queryParams:{page:10,pageSize:20}})
  }


  goSecondPage(){
    this.router.navigate(['ikincisayfa/5'])
    // this.router.navigateByUrl(`ikincisayfa`)
  }


}
