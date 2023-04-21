import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
      alert('Te rog introdu email-ul');
      return;
    }

    if(this.password == ''){
      alert('Te rog introdu parola');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email='';
    this.password='';
  }

  goToRegister(){
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }
}
