import { Component, OnInit } from '@angular/core';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { FinishedStudy } from 'src/app/models/finished-study.mode';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  firstNameUser:string='';
  lastNameUser:string='';
  description:string='eu sunt din brasov si ...'

  user: User = new User;
  studies:FinishedStudy[]=[];
  finishStudyDetailed:FinishedStudyDetailed[]=[];

  showFinishedStudys=false;
  showExperience=false;

  showEditPage=false;
  showSearchPage=false;
  showHomePage=true;

  constructor(private auth: AuthService, private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.GetUserById().subscribe((user:User)=>{
      this.user=user;
     });
  }

  setName(){
    this.firstNameUser=this.user.firstName.charAt(0).toUpperCase()+this.user.firstName.slice(1);
    this.lastNameUser=this.user.lastName.charAt(0).toUpperCase()+this.user.lastName.slice(1);
    return this.firstNameUser+' '+this.lastNameUser;
  }

  openFinishedStudys(){
    this.showFinishedStudys=true;
    this.showExperience=false;
    this.dataService.GetFinishedStudyByUserId().subscribe((finishStudyDetailed:FinishedStudyDetailed[])=>{
      this.finishStudyDetailed=finishStudyDetailed;
    });
    
  }

  openExperience(){
    this.showExperience=true;
    this.showFinishedStudys=false;
  }

  close(){
    this.showExperience=false;
    this.showFinishedStudys=false;
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
    this.showExperience=false;
    this.showFinishedStudys=false;
  }

  goToSearchPage(){
    this.showEditPage=false;
    this.showSearchPage=true;
    this.showHomePage=false;
    this.showExperience=false;
    this.showFinishedStudys=false;
  }

  goToLoginPage(){
    this.auth.logout();
  }  
}
