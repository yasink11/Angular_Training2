import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverService } from 'src/app/service/resolver.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.Activatedroute.snapshot.data['postList'])

  }

}
