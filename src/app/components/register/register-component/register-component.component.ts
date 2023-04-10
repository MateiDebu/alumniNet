import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {

  email : string='';
  password :string ='';
  hide=true;

  lastNameCheck:string;
  firstNameCheck:string;
  emailCheck:string;
  passwordCheck:string;
  passwordRepeatCheck:string;
  valid: boolean = false;
  empty:boolean=false;
  validConfirmation: boolean=false;
  errorDisplayConfirmPassword:boolean=true;
  errorDisplayPassword:boolean=true;
  errorDisplay:boolean=true;

  constructor(private router:Router, private auth :AuthService) {
    this.lastNameCheck='';
    this.firstNameCheck='';
    this.emailCheck='';
    this.passwordCheck='';
    this.passwordRepeatCheck='';
   }

  ngOnInit(): void {
  }

  setFirstName(firstNameCheck:string){
    this.firstNameCheck=firstNameCheck;
  }
  setLastName(lastNameCheck:string){
    this.lastNameCheck=lastNameCheck;
  }
  setPassword(passwordCheck:string){
    this.passwordCheck=passwordCheck;
  }
  setRepeatPassword(passwordRepeatCheck:string){
    this.passwordRepeatCheck=passwordRepeatCheck;
  }
  setEmail(emailCheck:string){
    this.emailCheck=emailCheck;
  }
 
  passwordVerification(passwordCheck:string){
    if(
      passwordCheck.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
    ){
      this.valid=true;
      this.errorDisplayPassword=true;
      return true;
    }
    else
    {
      this.valid=false;
      this.errorDisplayPassword=false;
      return false;
    }
  }

  passwordComparison(passwordCheck:string,passwordRepeatCheck:string){
    if(passwordCheck === passwordRepeatCheck){
      this.validConfirmation=true;
      this.errorDisplayConfirmPassword=true;
      return true;
    }
    else
    {
      this.validConfirmation=false;
      this.errorDisplayConfirmPassword=false;
      return false;
    }
  }

  isEmpty(){

    this.setFirstName(this.firstNameCheck);
    this.setLastName(this.lastNameCheck);
    this.setEmail(this.emailCheck);
    this.setPassword(this.passwordCheck);
    this.setRepeatPassword(this.passwordRepeatCheck);
  
    console.log ("first name ", this.firstNameCheck );
    if(this.lastNameCheck=='' || this.firstNameCheck=='' || 
     this.passwordCheck=='' || this.passwordRepeatCheck=='' || this.emailCheck==''){
      this.empty=false;
      this.errorDisplay=false;
    }else
    {
      this.empty=true;
      this.errorDisplay=true;
    }
  }
  

  register(){
      this.isEmpty();
      if(this.valid && this.empty && this.validConfirmation){
        this.auth.register(this.email,this.password);
        this.email='';
        this.password='';
      }
      else
         alert('Te rog completeaza toate campurile.')
  }
}
