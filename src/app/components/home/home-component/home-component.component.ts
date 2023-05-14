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


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  firstNameUser:string='';
  lastNameUser:string='';
  description:string='eu sunt din brasov si sunt absolvent al Universitati Transilvania Brasov'

  user: User = new User;
  studies:FinishedStudy[]=[];
  finishStudyDetailed:FinishedStudyDetailed[]=[];

  showFinishedStudys=false;
  showExperience=false;

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
    this.viewMoreInformation=false;
  }

  close(){
    this.showExperience=false;
    this.showFinishedStudys=false;
    this.viewMoreInformation=false;
  }

  setPath(){
  }

  setDescription(){
    return this.description;
  }

  goToHomePage(){
    this.showSearchPage=false;
    this.showHomePage=true;
  }

  goToSearchPage(){
    this.showSearchPage=true;
    this.showHomePage=false;
    this.showExperience=false;
    this.showFinishedStudys=false;
  }

  goToLoginPage(){
    this.auth.logout();
  }  

  openEditProfile(){

    let dialogRef=this.dialog.open(EditProfileComponentComponent, {
      width: '360px',
      height: '360px',
      disableClose:true,
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){
        console.log('Editarea s-a realizat cu succes');
      }else
        console.log('S-a renunțat la editarea profilului');
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
        this.showFinishedStudys=false;
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
