import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  names:string[]=["ahmet","mehmet","hasan"]

  userList:User[]=[];
  constructor() {
    this.userList.push(new User(1,"Ahmet","ahmet@gmail.com"))
    this.userList.push(new User(2,"Mehmet","Mehmet@gmail.com"))
    this.userList.push(new User(3,"AhmetMehmet","ahmetMehmet@gmail.com"))
}
  ngOnInit(): void {
  }

}
