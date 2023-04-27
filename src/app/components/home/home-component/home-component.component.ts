import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.mode';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { FinishedStudy } from 'src/app/models/finished-study.mode';
import { Post } from 'src/app/models/post.mode';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog-component/confirmation-dialog.component';

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
  experience:Experience[]=[];
  studies:FinishedStudy[]=[];
  finishStudyDetailed:FinishedStudyDetailed[]=[];

  showFinishedStudys=false;
  showExperience=false;

  showEditPage=false;
  showSearchPage=false;
  showHomePage=true;

  constructor(private auth: AuthService, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.GetUserById().subscribe((user:User)=>{
      this.user=user;
     });
  }

  openDeleteDialog(id:number){
    
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      height: '240px',
      data : {
        title: 'Confirmare ștergere',
        message: 'Sigur doriți să ștergeți experiența selectată?',
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.DeleteExperience(id).subscribe((res)=>{
          if(res){
            alert("Ștergerea s-a efectuat cu succes");
          }else
            alert("Ștergerea nu s-a putut efectua");
          
        });
        this.showExperience=false;
      }});
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
    this.dataService.GetAllExperiencesForUser().subscribe((experience:Experience[])=>{
      this.experience=experience;
    });
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
