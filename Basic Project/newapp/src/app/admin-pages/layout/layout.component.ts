import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  BacktoHome():boolean{
    return location.pathname=='';
  }
  isHomePage():boolean{
    return location.pathname=='/admin';
  }
}
