import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor( private element:ElementRef){

    element.nativeElement.style.backgroundColor='blue';
    console.log("Custom Directive Çalıştı");
    alert("Custom Directive Çalıştı");

  }

}
