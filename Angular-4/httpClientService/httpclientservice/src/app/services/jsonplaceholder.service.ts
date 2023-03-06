import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, from, map, mergeMap, Observable, skip, take, toArray } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

public currencyObservable= new BehaviorSubject("Türk Lirası")
constructor(private http:HttpClient){ }


setCurrency(val:any){
  this.currencyObservable.next(val);
}


getPostList(page:number, pageSize:number)
{
  // page:1 pageSize:5 => 1,2,3,4,5 => skip(0)
  // page:2 pageSize:5 => 6,7,8,9,10  => skip(1)
  // page:3 pageSize:5 => 11,12,13,14,15  => skip(2)

  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  .pipe(mergeMap(x=>from(x)),skip(((page-1)*pageSize)) , take(pageSize),map(x=>`${x.id} - ${x.userId}-${x.title}-${x.body}`), toArray());
}

getPost(id:number){

  var queryParams = new HttpParams({
    fromString:'name =ahmet&age=23'
  })

  return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)

}

getUserWithSearch(searchText:string){
return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
.pipe(mergeMap(x=>from(x)),filter(x=>x.name.toLowerCase().includes(searchText.toLowerCase())),map(x=>x.name),toArray())
}







}
