import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class HelperService {

  title:string="Title";
  isShow:boolean=false;
  constructor() { }

upper(text:string)
{
  return text.toUpperCase();
}


SendSms(text:string, phone:string){


  console.log("Gerçek sms gönderildi")
}
}
