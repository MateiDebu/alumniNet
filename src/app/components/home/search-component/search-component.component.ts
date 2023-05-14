import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty.mode';
import { Specialization } from 'src/app/models/specialization.mode';
import { User } from 'src/app/models/user.mode';
import { DataService } from 'src/app/services/data.service';
import { StudiesUserComponentComponent } from '../studies-user-component/studies-user-component.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  faculties: Faculty[]=[];
  specializations:Specialization[]=[];
  showAdvancedSearch=false;
  showSearch=true;
  searchPeople:string='';
  
  showResult=false;
  users:User[]=[];

  currentUser:User = new User();

  constructor(private dataService: DataService,private dialog:MatDialog) { 
    this.showAdvancedSearch=false;
    this.dataService.GetAllUsers().subscribe((users:User[])=>{
        this.users=users;
    });
    
    this.dataService.GetUserById().subscribe((user) =>{
      this.currentUser=user;
    })
  }

  ngOnInit(): void {
    this.dataService.GetAllFaculties().subscribe(( faculties: Faculty[]) => {
      this.faculties=faculties;
  })
  }

  specializationsFaculty(facultyId:number){
    this.dataService.GetSpecializationsByFacultyId(facultyId).subscribe((specializations : Specialization[]) => {
      this.specializations=specializations;
    })
  }

  goToAdvancedSearch(){
    this.showAdvancedSearch=true;
    this.showSearch=false;
  }

  searchGraduates(){
    this.showResult=true;
  }

  closeAdvancedSearch(){
    this.showAdvancedSearch=false;
    this.showSearch=true;
  }

  openStudiesForSearchUser(profileId:number){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      param1: profileId
    }

    dialogConfig.width='650px';
    dialogConfig.height='400px';
    dialogConfig.disableClose=true;

    let dialogRef = this.dialog.open(StudiesUserComponentComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Afișarea s-a făcut cu succes');
      }else
        console.log('Adaugarea nu s-a putut face');
      });
  }

  openExperienceForSearchUser(){

  }

  openProfileForSearchUser(){

  }

  openPostsForSearchUser(){

  }

}
