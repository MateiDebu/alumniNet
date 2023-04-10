import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  showEditPage=false;
  showSearchPage=false;
  showHomePage=true;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHomePage(){
    this.showEditPage=false;
    this.showSearchPage=false;
    this.showHomePage=true;
  }

  goToEditProfilePage(){
    this.showEditPage=true;
    this.showSearchPage=false;
    this.showHomePage=false;
  }

  goToSearchPage(){
    this.showEditPage=false;
    this.showSearchPage=true;
    this.showHomePage=false;
  }

  goToLoginPage(){
    this.auth.logout();
  }
  
}
