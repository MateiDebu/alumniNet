import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
   
  constructor(private auth : AuthService, private router: Router, private dataService: DataService) { }
  email : string = '';
  password : string = '';
  hide=true;

  login(){
    if(this.email == ''){
      alert('Te rog introdu adresa de mail');
      return;
    }

    if(this.password == ''){
      alert('Te rog introdu parola');
      return;
    }

    this.auth.login(this.email, this.password);
  }

  goToRegister(){
    this.router.navigate(['register']);
  }

  forgetPassword(){
    if(this.email == ''){
      alert('Adresa de mail nu este bună');
    }else
      this.auth.recoverPassword(this.email);
  }

  ngOnInit(): void {
  }
  
}
