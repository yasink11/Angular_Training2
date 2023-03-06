import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  loginForm:FormGroup;
  countryMenu:CountryDropMenu[] = [{text:"Türkiye", value:1},{text:"Almanya", value:2},{text:"Fransa", value:3}];
  genderMenu:GenderRadioMenu[]=[{text:"Erkek", value:1}, {text:"Kadın", value:2}]
  constructor(fb:FormBuilder) {
    this.loginForm =fb.group({
      userName: fb.control('',Validators.required),
      password: fb.control('',[Validators.required,Validators.minLength(4)]),
      rememberMe: false,
      country:fb.control('',Validators.required),
      gender:[1],
      birthDate:fb.control('',[Validators.required,this.isOldEnough])
    })
   }

  ngOnInit(): void {
  }

  signin(){
  console.log(this.loginForm.value)
  }

  isInValidMessageShow(formControlName:string):boolean | undefined
  {
    return this.loginForm.get(formControlName)?.invalid &&(this.loginForm.get(formControlName)?.dirty ||
    this.loginForm.get(formControlName)?.touched)
  }

  isErrorValid(formControlName:string):boolean {
    let formControl =this.loginForm.get(formControlName);

    if(!(formControl?.invalid && (formControl?.dirty ||formControl?.touched))) return false;

    if(formControl.errors?.['required']) return true;
    if(formControl.errors?.['minlength']) return true;

     return false;
  }

  isSuccessValid(formControlName:string){
    let formControl =this.loginForm.get(formControlName);

    return formControl?.valid && (formControl?.dirty || formControl?.touched);
  }

  isOldEnough=(control:FormControl):{isYoung:true} | null=>{

    const birthDate=new Date(control.value);

    birthDate.setFullYear(birthDate.getFullYear()+18);

    return birthDate < new Date() ? null : { isYoung:true}


  }
}
