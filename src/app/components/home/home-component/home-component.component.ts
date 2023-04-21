import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  firstNameUser:string='Matei';
  lastNameUser:string='Debu';
  description:string='eu sunt din brasov si ...'


  showEditPage=false;
  showSearchPage=false;
  showHomePage=true;

  constructor(private auth: AuthService, private dataService:DataService) { }

  ngOnInit(): void {
  }

  setName(){
    return this.firstNameUser+' '+this.lastNameUser;
  }

  setPath(){

  }

  setDescription(){
    return this.description;
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
    //this.auth.logout();
  }
  
}
