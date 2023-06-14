import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FinishedStudyDetailed } from 'src/app/models/finished-study-detailed.mode';
import { User } from 'src/app/models/user.mode';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { ValidationConfirmationComponentComponent } from '../validation-confirmation-component/validation-confirmation-component.component';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.scss']
})
export class AdminComponentComponent implements OnInit {

  showHomePage       = true;
  showPostPage       = false;
  showTableWithUsers = true;

  users: User[] = [];
  finishedStudies: FinishedStudyDetailed[] = [];

  active!:number;

  constructor(private auth: AuthService, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  goToLoginPage(){
    this.auth.logout();
  }

  goToHomePage(){
    this.showHomePage = true;
    this.showPostPage = false;
  }

  goToPostPage() {
    this.showHomePage = false;
    this.showPostPage = true;
  }

  getUsers(){
    this.dataService.GetAllUsers().subscribe((users:User[])=>{
      this.users = users;
    });
  }

  getStudies(profileId:number){
    this.dataService.GetFinishedStudyByProfileId(profileId).subscribe((finishedStudies:FinishedStudyDetailed[])=>{
        this.finishedStudies = finishedStudies;
    });
  }

  setActive(active:number){
    this.active = active;
  }

  setCloseStudies(){
    this.active = -1;
  }

  openDialogChangeValid(userId:string,firstName:string, lastName:string){

    let fullName = firstName+' '+lastName;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      param1: fullName,
      message: 'Sigur doriți să validați utilizatorul?',
      buttonConfirmationText: 'Validează'
    }

    dialogConfig.width = '400px';
    dialogConfig.height = '300px';
    dialogConfig.disableClose = true;

    let dialogRef = this.dialog.open(ValidationConfirmationComponentComponent, dialogConfig);
    this.showTableWithUsers = false;
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.UserValidation(userId).subscribe((res)=>{
          if(res){
            alert('Validarea s-a făcut cu succes');
            this.showTableWithUsers = true;
            this.getUsers();
          }else
            alert('Validarea nu s-a putut efectua');
            this.showTableWithUsers = true;
        });
        console.log('Validarea s-a făcut cu succes');
       
      }else
        console.log('Validarea a fost anulată');
        this.showTableWithUsers = true;
      });
  }
}
