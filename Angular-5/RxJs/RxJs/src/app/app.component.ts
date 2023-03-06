import { Component, OnInit } from '@angular/core';
import { catchError, defer, distinct, filter, find, first, from, fromEvent, interval, last, map, mapTo, mergeMap,
Observable, of, pipe, range, reduce, retry, single, skip, skipUntil, skipWhile, switchMap, take, takeLast, takeWhile,
tap, timer, toArray } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private srv:ExampleService){}

  ngOnInit(): void {

    // Of Operatoru
    // let values = of('angular',2,[1,2,3],5.56)

    // values.subscribe(x=>{
    //   console.log(x);
    // })


  // Interval Operatoru
    // let values= interval(1000)
    // values.subscribe(x=>{
    //   console.log(x)
    // })
    // values.subscribe({
    // next:(val)=>console.log(val),
    // error:(err)=>console.log(err),
    // complete:()=>console.log("Tamamlandı")})


    //Timer Operator
    // let values= timer(1000)
    // values.subscribe({
    //   next:(val)=>console.log("Reklam gösterildi"),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı")})

    // Range Operator
    // let values= range(1,10)
    // values.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı")})



    //   let ofObservable= of(new Date())
    //   let timerObservable = timer(3000);
    //   let deferObservable = defer(()=> of(new Date()));

    //   timerObservable.subscribe(x=>{

    //     ofObservable.subscribe({
    //       next:(val)=>console.log(`of : ${val}`),
    //       error:(err)=>console.log(err),
    //       complete:()=>console.log("Tamamlandı")})
    //   })

    //   deferObservable.subscribe({
    //     next:(val)=>console.log(`defer : ${val}`),
    //     error:(err)=>console.log(err),
    //     complete:()=>console.log("Tamamlandı")})
    // }

    //From Operatoru

    // const map = new Map();
    // map.set(1,"Kitap")
    // map.set(2,"Kitap1")
    // map.set(3,"Kitap2")

    // let ofObservable = from(map)

    // ofObservable.subscribe({
    //   next:(val)=>console.log(`key : ${val[0]}, value: ${val[1]}`),
    //   error:(e)=> console.log(e),
    //   complete:()=>console.log("Tamamlandı")
    // })

    // Filtering Operators

    //First Operator

    // const myArray= from([5,7,9,10,12,14,20,33])

    // myArray.pipe(first(x=>x>15)).subscribe(x=>{
    //   console.log(x)
    // })

//Find Operator


// const myArray= from([5,7,9,10,12,14,20,33])

// myArray.pipe(find(x=>x>35)).subscribe(x=>{
//   console.log(x)
// })


//Last Operator

// const myArray= from([5,7,9,10,12,14,20,33])

// myArray.pipe(filter(x=>x>10),last(x=>x>5)).subscribe(x=>{
//   console.log(x)
// })


//Single Operator

// const myArray= from([5,7,9,10,12,14,20,33])

// myArray.pipe(single(x=>x>15)).subscribe(x=>{
//   console.log(x)
// })


//Distinct Operator

// const myArray= from([5,7,9,2,5,5,8,7])

// myArray.pipe(distinct()).subscribe(x=>{
//   console.log(x)
// })

//Skip Operator
// const myArray= from([1,2,3,4,5,6,7,8,9,10])

// myArray.pipe(skip(4)).subscribe(x=>{
//   console.log(x)
// })

//Skip While Operator

// const myArray= from([1,2,3,4,5,6,7,8,9,10])

// myArray.pipe(skipWhile(x=>x<4)).subscribe(x=>{
//   console.log(x)
// })

// Skip Until

// const myArray= interval(1000);

// myArray.pipe(skipUntil(timer(5000))).subscribe(x=>{
//   console.log(x)
// })



//Take/ TakeLast / Take While

// const myArray= from([1,2,3,4,5,6,7,8,9,10]);

// myArray.pipe(take(4)).subscribe(x=>{
//   console.log(x)
// })
// myArray.pipe(takeLast(4)).subscribe(x=>{
//   console.log(x)
// })

// myArray.pipe(takeWhile(x=>x<4)).subscribe(x=>{
//   console.log(x)
// })
// bir kere şartı sağlamıyorsa işlemi yapmaz.


//Map Operator

// const myArray = from([2,4,8,15]);
// let names=from(
//   [
//     {name:"Yasin",surname:"Karaçam",email:"yasin@outlook.com"},
//     {name:"Mehmet",surname:"Sönmez",email:"mehmet@outlook.com"},
//     {name:"Erdem",surname:"Yüksel",email:"erdem@outlook.com"},
//     {name:"Kadir",surname:"Güven",email:"kadir@outlook.com"},
//   ]
// )


// names.pipe(map(x=>`${x.name} ${x.surname} (${x.email})`)).subscribe(x=>{
//   console.log(x)
// })

//MapTo Operator
// const myArray = from([2,4,8,15]);
// let names=from(
//   [


// names.pipe(mapTo("sabit değer")).subscribe(x=>{
//   console.log(x)
// })

// const click=fromEvent(document,"click");
// click.pipe(mapTo("Merhaba")).subscribe(x=>{console.log(x)})

//MergeMap Operator


// const myArray = from([2,4,8,15]);
// let names=from(
//   [
//     {name:"Yasin",surname:"Karaçam",email:"yasin@outlook.com"},
//     {name:"Mehmet",surname:"Sönmez",email:"mehmet@outlook.com"},
//     {name:"Erdem",surname:"Yüksel",email:"erdem@outlook.com"},
//     {name:"Kadir",surname:"Güven",email:"kadir@outlook.com"},
//   ]
// )

// var stringArray= of("a","b","c","d");
// var numberArray= of(1,2,3,4);

// stringArray.pipe(mergeMap(x=>numberArray.pipe(map(y=>x+y)))).subscribe(x=>{
//   console.log(x)
// })


// const myclick=fromEvent(document,"click");
//  myclick.pipe(switchMap(()=>timer(3000))).subscribe(x=>{
//   console.log("Tıklandı")
//  })

// toArray Operator

// var stringArray= of("a","b","c","d");

// stringArray.pipe(toArray()).subscribe(x => console.log(x))

//reduce operator

// var numberArray= of(1,2,3,4,5);

// numberArray.pipe(reduce((x,y)=>(x+y))).subscribe(x => console.log(x))

//Tap operator
// var numberArray= of(1,2,3,4,5);

// numberArray.pipe(tap(z=>console.log(`${z} data geldi`))).subscribe(z => console.log(z))

// }

//Retry Operator
// ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(retry(3)).subscribe(x=>{
//   console.log(x);
// })

var data= interval(1000).pipe(map(val=>{
  if(val > 5){
    throw "değer 5 den büyük olamaz"
  }
  return val;
}),catchError(e=> of(`hata: ${e}`))
)

// data.subscribe(x=>{
//   console.log(x);
// })
data.subscribe({
  next:(val)=>{console.log(val)},
  error:(e)=>{console.log(`bu hata subscribe tarafında ele alındı`)}
})
  }
}
