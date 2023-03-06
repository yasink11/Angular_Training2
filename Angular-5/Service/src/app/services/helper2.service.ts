import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helper2Service {

  title:string="Title";
  isShow:boolean=false;
  constructor() { }

upper(text:string)
{
  return text.toUpperCase() + "daha hızlı ";
}


SendSms(text:string, phone:string){
  console.log("Sahte sms gönderildi")
}

}
