import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { FinishedStudy } from 'src/app/models/finished-study.mode';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { AddExperienceComponentComponent } from '../add-experience-component/add-experience-component.component';
import { AddStudiesComponentComponent } from '../add-studies-component/add-studies-component.component';
import { EditProfileComponentComponent } from '../edit-profile-component/edit-profile-component.component';
import { Profile } from 'src/app/models/profile.mode';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  firstNameUser:string='';
  lastNameUser:string='';
  description:string='';

  user: User = new User;
  studies:FinishedStudy[]=[];
  finishStudyDetailed:FinishedStudyDetailed[]=[];
  profile:Profile=new Profile;

  showFinishedStudies=false;
  showExperience=false;
  showDescription=false;

  showSearchPage=false;
  showHomePage=true;

  viewMoreInformation=false;
  viewMoreButton=true;
  active!:number;

  constructor(private auth: AuthService, private dataService:DataService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.GetUserById().subscribe((user:User)=>{
      this.user=user;
     });
     this.setProfile();
  }

  getName(){
    this.firstNameUser=this.user.firstName.toUpperCase();
    this.lastNameUser=this.user.lastName.toUpperCase();
    return this.firstNameUser+' '+this.lastNameUser;
  }

  getConfirmation(){
    return this.user.isValid;
  }

  openFinishedStudies(){
    this.showFinishedStudies=true;
    this.showExperience=false;
    this.dataService.GetFinishedStudyByUserId().subscribe((finishStudyDetailed:FinishedStudyDetailed[])=>{
      this.finishStudyDetailed=finishStudyDetailed;
    });
    this.showDescription=false;
  }

  openDescription(){
    this.showDescription=true;
    this.showExperience=false;
    this.showFinishedStudies=false;
    this.setProfile();
  }

  openExperience(){
    this.showExperience=true;
    this.showFinishedStudies=false;
    this.showDescription=false;
  }

  close(){
    this.showExperience=false;
    this.showFinishedStudies=false;
    this.showDescription=false;
  }

  setProfile(){
    this.dataService.GetDescriptionAndPhotoByUserId().subscribe((profile)=>{
      this.profile=profile;
    });
  }

  getPath(){
    return this.profile.profilePicture;
  }

  getDescription(){
    return this.profile.description;
  }

  goToHomePage(){
    this.showSearchPage=false;
    this.showHomePage=true;
  }

  goToSearchPage(){
    this.showSearchPage=true;
    this.showHomePage=false;
    this.showExperience=false;
    this.showFinishedStudies=false;
  }

  goToLoginPage(){
    this.auth.logout();
  }  

  openEditProfile(){

    this.showDescription=false;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      param1: this.profile.description
    }

    dialogConfig.width='450px';
    dialogConfig.height='450px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(EditProfileComponentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( result => {
      if(result){
        this.setProfile();
      }else
        this.setProfile();
    });
  }

  openAddExperienceDialog(){
    
    let dialogRef = this.dialog.open(AddExperienceComponentComponent, {
      width: '420px',
      height: '520px',
      disableClose:true,
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Adaugarea s-a făcut cu succes!');
        this.showExperience=false;
      }else
        console.log('Adaugarea nu s-a putut face');
      });
  }

  openAddStudiesDialog(){
    
    let dialogRef = this.dialog.open(AddStudiesComponentComponent, {
      width: '440px',
      height: '540px',
      disableClose:true,
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Adaugarea s-a făcut cu succes!');
        this.showFinishedStudies=false;
      }else
        console.log('Adaugarea nu s-a putut face');
      });
  }

  viewMore(){
    this.viewMoreInformation=true;
    this.viewMoreButton=false;
  }

  viewLess(){
    this.viewMoreInformation=false;
    this.viewMoreButton=true;
  }

  setIsActive(active:number){
    this.active=active;
  }

}
