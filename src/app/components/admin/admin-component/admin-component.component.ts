import { Component, OnInit } from '@angular/core';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.scss']
})
export class AdminComponentComponent implements OnInit {

  showHomePage=true;
  showPostPage=false;

  users:User[]=[];
  finishedStudies:FinishedStudyDetailed[]=[];

  active!:number;

  constructor(private auth: AuthService, private dataService:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  goToLoginPage(){
    this.auth.logout();
  }

  goToHomePage(){
    this.showHomePage=true;
    this.showPostPage=false;
  }

  goToPostPage() {
    this.showHomePage=false;
    this.showPostPage=true;
  }

  getUsers(){
    this.dataService.GetAllUsers().subscribe((users:User[])=>{
      this.users=users;
    });
  }

  getStudies(profileId:number){
    this.dataService.GetFinishedStudyByProfileId(profileId).subscribe((finishedStudies:FinishedStudyDetailed[])=>{
        this.finishedStudies=finishedStudies;
    });
  }

  setActive(active:number){
    this.active=active;
  }

  setCloseStudies(){
    this.active=-1;
  }

  openDialogChangeValid(userId:string){
    
  }

}
