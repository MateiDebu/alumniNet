import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide=true;

  lastNameCheck:string;
  firstNameCheck:string;
  collegeCheck:string;
  emailCheck:string;
  specializationCheck:string;
  passwordCheck:string;
  passwordRepeatCheck:string;
  yearCheck:string;
  valid: boolean = false;
  empty:boolean=false;
  validConfirmation: boolean=false;
  errorDisplayConfirmPassword:boolean=true;
  errorDisplayPassword:boolean=true;
  errorDisplay:boolean=true;

  constructor(private router:Router) {
    this.lastNameCheck='';
    this.firstNameCheck='';
    this.collegeCheck='';
    this.emailCheck='';
    this.specializationCheck='';
    this.passwordCheck='';
    this.passwordRepeatCheck='';
    this.yearCheck='';
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
  setSpecialization(specializationCheck:string){
    this.specializationCheck=specializationCheck;
  }
  setCollege(collegeCheck:string)
  {
    this.collegeCheck=collegeCheck;
  }
  setEmail(emailCheck:string){
    this.emailCheck=emailCheck;
  }
  setYear(yearCheck:string){
    this.yearCheck=yearCheck;
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
    this.setSpecialization(this.specializationCheck);
    this.setCollege(this.collegeCheck);
    this.setYear(this.yearCheck);

    console.log ("first name ", this.firstNameCheck );
    if(this.lastNameCheck=='' || this.firstNameCheck=='' || this.collegeCheck== '' ||
     this.passwordCheck=='' || this.passwordRepeatCheck=='' || this.emailCheck==''|| this.specializationCheck=='' || this.yearCheck==''){
      this.empty=false;
      this.errorDisplay=false;
    }else
    {
      this.empty=true;
      this.errorDisplay=true;
    }
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Trebuie să introduceți un mail';
    }
  
    return this.email.hasError('email') ? 'Mail-ul nu este valid' : '';
  }

  goLogInPage(){
      this.isEmpty();
      if(this.valid && this.empty && this.validConfirmation)
                this.router.navigate(['']);
  }
}
