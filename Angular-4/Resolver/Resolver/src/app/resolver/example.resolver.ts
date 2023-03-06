import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { ResolverService } from '../service/resolver.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleResolver implements Resolve<string[]> {
  constructor(private srv:ResolverService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {

  return this.srv.getPostList(1,10).pipe(delay(2000))
  }
}
