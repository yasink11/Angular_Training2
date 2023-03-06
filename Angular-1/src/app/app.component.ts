import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turkcell';


// class Product{
//   //Fields
// private name:string;
// public price:number;
// protected category:string;
// isPublish:boolean

// //constructor
// constructor(name:string,price:number,category:string,isPublish:boolean){
// this.name=name;
// this.price=price;
// this.category=category;
// this.isPublish=isPublish;
//   }

// Topla(a1:number, a2:number):number
// {
//   return a1+a2
// }

// }


// class product2 extends Product{

//   //Public
//   //Private
//   //Protected

//   constructor(name:string,price:number,category:string,isPublish:boolean,parametre2:Date){
//     super(name,price,category,isPublish)
//   }

//   method2(){
//     var p = new product2('kalem1',200,'kalemler',false,new Date());
//     p.price
//     // p.name alamaz çünkü protected
//   }
// }

// interface Products
// {
//   Name:string;
//   Price:number;
//   // SayHello:()=> string
//   // SayHello2():void

// }


// class Car implements Products
// {
//   Name: string;
//   Price: number;

//   constructor(name:string,price:number){
//     this.Name=name
//     this.Price=price
//   }
//   SayHello (){
//     return "merhaba"
//   }

//   SayHello2(): void {
//     console.log("merhaba")
//   }


// }
// class car{
//   product:Products={Name:"Kalem",Price:200}

//   constructor(product:Products){
//     this.product={Name:"Kalem", Price:200};
//   }
}
