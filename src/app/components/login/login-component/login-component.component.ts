import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
   
  constructor( private router:Router) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide=true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Trebuie să introduceți un mail';
    }

    return this.email.hasError('email') ? 'Mail-ul nu este valid' : '';
  }

  goToRegister(){
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }

}
